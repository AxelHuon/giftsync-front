// pages/api/auth/[...nextauth].ts
import { SignInUserRequestApiDTO } from '@/src/api/generated/Api.schemas'
import {
    refreshToken,
    signInUser,
    signInUserWithGoogle,
} from '@/src/api/generated/auth'
import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

interface CustomUser {
    id: string
    firstName: string
    lastName: string
    email: string
    accessToken: string
    refreshToken: string
    dateOfBirth?: string
    profilePicture?: string
}

// Configuration NextAuth
export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/signin',
    },
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'john@doe.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (!credentials) {
                    return null
                }
                try {
                    const signInData: SignInUserRequestApiDTO = {
                        email: credentials.email,
                        password: credentials.password,
                    }
                    const user = await signInUser(signInData)
                    if (user?.accessToken && user?.refreshToken) {
                        return {
                            id: user.id,
                            email: user.email,
                            accessToken: user.accessToken,
                            refreshToken: user.refreshToken,
                        } as CustomUser
                    }
                    return null
                } catch (err: any) {
                    throw new Error(
                        err.response?.data?.code || 'CredentialsSignin'
                    )
                }
            },
        }),
        CredentialsProvider({
            id: 'google-credentials',
            name: 'GoogleCredentials',
            credentials: {
                idToken: { label: 'Google ID Token', type: 'text' },
            },
            async authorize(credentials) {
                console.log(credentials)
                if (!credentials || !credentials.idToken) {
                    throw new Error('Missing Google idToken')
                }
                const user = await signInUserWithGoogle({
                    idToken: credentials.idToken,
                })
                if (user?.accessToken && user?.refreshToken) {
                    return {
                        id: user.id,
                        email: user.email,
                        accessToken: user.accessToken,
                        refreshToken: user.refreshToken,
                    } as CustomUser
                }
                return null
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
                token.accessToken = user.accessToken
                token.refreshToken = user.refreshToken
                token.accessTokenExpires = Date.now() + 24 * 60 * 60 * 1000
            }

            const isExpired = Date.now() > (token.accessTokenExpires as number)
            if (isExpired) {
                try {
                    const refreshed = await refreshToken({
                        refreshToken: token.refreshToken as string,
                    })
                    token.accessToken = refreshed.accessToken
                    token.refreshToken = refreshed.refreshToken
                    token.accessTokenExpires = Date.now() + 24 * 60 * 60 * 1000
                } catch (err) {
                    return {
                        ...token,
                        error: 'RefreshTokenError',
                    }
                }
            }

            return token
        },

        async session({ session, token }) {
            session.user = {
                id: token.id as string,
                email: token.email as string,
                accessToken: token.accessToken as string,
                refreshToken: token.refreshToken as string,
            }
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET || 'SUPER_SECRET_KEY',
}

export default NextAuth(authOptions)
