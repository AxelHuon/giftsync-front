import { ErrorResponseApiDTO } from '@/src/api/generated/Api.schemas'
import { refreshToken } from '@/src/api/generated/auth'
import Axios, {
    AxiosError,
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
} from 'axios'

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean
}

export const AXIOS_INSTANCE = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
})

AXIOS_INSTANCE.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
})

AXIOS_INSTANCE.interceptors.request.use((config: CustomAxiosRequestConfig) => {
    const userInformation = localStorage.getItem('user_information')
    let accessToken = null

    try {
        const parsedInfo = JSON.parse(userInformation || '{}')
        accessToken = parsedInfo?.accessToken
    } catch (error) {
        console.warn(
            'Erreur lors du parsing des informations utilisateur:',
            error
        )
    }
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
})

AXIOS_INSTANCE.interceptors.request.use((config: CustomAxiosRequestConfig) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    if (apiKey) {
        config.headers['x-api-key'] = apiKey
    }
    return config
})

AXIOS_INSTANCE.interceptors.response.use(
    (response) => {
        return response
    },
    async (error: AxiosError<ErrorResponseApiDTO>) => {
        const originalRequest = error.config as CustomAxiosRequestConfig
        if (
            originalRequest &&
            error.response?.data?.code === 'token_expired' &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true
            const userInformation = localStorage.getItem('user_information')
            if (!userInformation) {
                return Promise.reject(error)
            }
            const userInformationParsed = JSON.parse(userInformation)

            if (
                userInformationParsed.refreshToken &&
                userInformationParsed.id
            ) {
                try {
                    const refreshResponse = await refreshToken({
                        refreshToken: userInformationParsed.refreshToken,
                    })
                    console.log(refreshResponse)
                    localStorage.setItem(
                        'user_information',
                        JSON.stringify({
                            ...userInformationParsed,
                            accessToken: refreshResponse.accessToken,
                            refreshToken: refreshResponse.refreshToken,
                        })
                    )
                    originalRequest.headers['Authorization'] =
                        `Bearer ${refreshResponse.accessToken}`
                    return AXIOS_INSTANCE(originalRequest)
                } catch (error: any) {
                    localStorage.removeItem('user_information')
                    return Promise.reject(error)
                }
            }
        }
        return Promise.reject(error)
    }
)

export const customInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig
): Promise<T> => {
    const source = Axios.CancelToken.source()
    const promise = AXIOS_INSTANCE({
        ...config,
        ...options,
        cancelToken: source.token,
    }).then(({ data }) => data)

    // @ts-ignore
    promise.cancel = () => {
        source.cancel('Query was cancelled')
    }

    return promise
}

export type ErrorType<Error> = AxiosError<ErrorResponseApiDTO>

export type BodyType<BodyData> = BodyData
