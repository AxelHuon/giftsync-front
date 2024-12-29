// ./customAxiosInstance.ts

import { ErrorResponseApiDTO } from '@/src/api/generated/Api.schemas'
import Axios, {
    AxiosError,
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
} from 'axios'
import { getSession } from 'next-auth/react'

export const AXIOS_INSTANCE = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
})

// Handle multipart/form-data
AXIOS_INSTANCE.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data'
    }
    return config
})

AXIOS_INSTANCE.interceptors.request.use(
    async (config) => {
        const session = await getSession()
        if (session?.user?.accessToken) {
            config.headers.Authorization = `Bearer ${session.user.accessToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

AXIOS_INSTANCE.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY
        if (apiKey) {
            config.headers['x-api-key'] = apiKey
        }
        return config
    }
)

AXIOS_INSTANCE.interceptors.response.use(
    (response) => {
        return response
    },
    async (error: AxiosError<ErrorResponseApiDTO>) => {
        return Promise.reject(error)
    }
)

/**
 * customInstance: un helper pour déclencher des requêtes
 * @param config Configuration Axios
 * @param options Options additionnelles
 */
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
