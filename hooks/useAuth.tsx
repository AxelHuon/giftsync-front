import { BodyType, ErrorType } from '@/src/api/customInstance'
import {
    ErrorResponseApiDTO,
    ForgotPasswordRequestApiDTO,
    ForgotPasswordResponseApiDTO,
    RegisterUserRequestApiDTO,
    RegisterUserResponseApiDTO,
    ResetPasswordRequestApiDTO,
    ResetPasswordResponseApiDTO,
    SignInUserRequestApiDTO,
    SignInUserResponseApiDTO,
} from '@/src/api/generated/Api.schemas'
import {
    useForgotPassword,
    useRegisterUser,
    useResetPassword,
    useSignInUser,
} from '@/src/api/generated/auth'
import { UseMutateFunction } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { createContext, ReactNode, useContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'

interface AuthContextProps {
    authState: SignInUserResponseApiDTO | null
    handleLogin: UseMutateFunction<
        SignInUserResponseApiDTO,
        ErrorType<ErrorResponseApiDTO>,
        {
            data: BodyType<SignInUserRequestApiDTO>
        },
        unknown
    >
    handleRegister: UseMutateFunction<
        RegisterUserResponseApiDTO,
        ErrorType<ErrorResponseApiDTO>,
        {
            data: BodyType<RegisterUserRequestApiDTO>
        },
        unknown
    >
    handleForgotPassword: UseMutateFunction<
        ForgotPasswordResponseApiDTO,
        ErrorType<ErrorResponseApiDTO>,
        { data: BodyType<ForgotPasswordRequestApiDTO> },
        unknown
    >
    handleResetPassword: UseMutateFunction<
        ResetPasswordResponseApiDTO,
        ErrorType<ErrorResponseApiDTO>,
        { data: BodyType<ResetPasswordRequestApiDTO> },
        unknown
    >
    isPendingResetPassword: boolean
    resetPasswordError: ErrorType<ErrorResponseApiDTO> | null
    isSuccessResetPassword: boolean
    isPendingForgotPassword: boolean
    forgotPasswordError: ErrorType<ErrorResponseApiDTO> | null
    isSuccessForgotPassword: boolean
    handleLogout: () => void
    isSigningIn: boolean
    isRegistering: boolean
    signInError: ErrorType<ErrorResponseApiDTO> | null
    registerError: ErrorType<ErrorResponseApiDTO> | null
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, setAuthState, removeAuthState] =
        useLocalStorage<SignInUserResponseApiDTO | null>(
            'user_information',
            null
        )

    const router = useRouter()

    const {
        mutate: handleLogin,
        isPending: isSigningIn,
        error: signInError,
    } = useSignInUser({
        mutation: {
            onSuccess: async (data) => {
                setAuthState(data)
                document.cookie = `auth_token=${data.accessToken}; path=/; secure; samesite=strict`

                /*get tokenInviteRoot in localstorage*/
                const tokenInviteRoot = localStorage.getItem('tokenInviteRoot')
                if (tokenInviteRoot) {
                    localStorage.removeItem('tokenInviteRoot')
                    await router.push(`/families/join/${tokenInviteRoot}`)
                    return
                }

                await router.push('/dashboard')
            },
        },
    })

    const {
        mutate: handleRegister,
        isPending: isRegistering,
        error: registerError,
    } = useRegisterUser({
        mutation: {
            onSuccess: async (data, variables, context) => {
                handleLogin({
                    data: {
                        email: variables.data.email,
                        password: variables.data.password,
                    },
                })
            },
        },
    })

    const {
        mutate: handleForgotPassword,
        isPending: isPendingForgotPassword,
        error: forgotPasswordError,
        isSuccess: isSuccessForgotPassword,
    } = useForgotPassword()

    const {
        mutate: handleResetPassword,
        isPending: isPendingResetPassword,
        error: resetPasswordError,
        isSuccess: isSuccessResetPassword,
    } = useResetPassword({
        mutation: {
            onSuccess: () => {
                router?.push('/')
            },
        },
    })

    const handleLogout = () => {
        setAuthState(null)
        document.cookie =
            'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        router.push('/auth/signin')
    }

    return (
        <AuthContext.Provider
            value={{
                isPendingResetPassword,
                resetPasswordError,
                isSuccessResetPassword,
                handleResetPassword,
                handleForgotPassword,
                isPendingForgotPassword,
                forgotPasswordError,
                isSuccessForgotPassword,
                handleRegister,
                isRegistering,
                registerError,
                authState,
                handleLogin,
                handleLogout,
                isSigningIn,
                signInError,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = (): AuthContextProps => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuthContext must be used within an UseAuth')
    }
    return context
}
