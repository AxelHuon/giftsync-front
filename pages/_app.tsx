import { AuthProvider } from '@/hooks/useAuth'
import { SettingsProvider } from '@/providers/SettingsProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { NuqsAdapter } from 'nuqs/adapters/next/pages'
import React from 'react'
import './global.css'

export default function App({ Component, pageProps, router }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 2, // Number of retries
            },
        },
    })
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

    return (
        <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId={clientId ?? ''}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <AuthProvider>
                        <NuqsAdapter>
                            <SettingsProvider>
                                <main className={'min-h-[100vh] bg-neutral-50'}>
                                    <Component {...pageProps} />
                                </main>
                            </SettingsProvider>
                        </NuqsAdapter>
                    </AuthProvider>
                </ThemeProvider>
            </GoogleOAuthProvider>
        </QueryClientProvider>
    )
}
