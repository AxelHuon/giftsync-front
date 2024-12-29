import NProgressBar from '@/components/atoms/NProgressBar/NProgressBar'
import { SettingsProvider } from '@/providers/SettingsProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { NuqsAdapter } from 'nuqs/adapters/next/pages'
import React, { useEffect, useState } from 'react'
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
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const handleStart = () => setLoading(true)
        const handleComplete = () => setLoading(false)

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    }, [router])

    return (
        <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId={clientId ?? ''}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <SessionProvider>
                        <NProgressBar isAnimating={loading} />
                        <NuqsAdapter>
                            <SettingsProvider>
                                <main className={'min-h-[100vh] bg-neutral-50'}>
                                    <Component {...pageProps} />
                                </main>
                            </SettingsProvider>
                        </NuqsAdapter>
                    </SessionProvider>
                </ThemeProvider>
            </GoogleOAuthProvider>
        </QueryClientProvider>
    )
}
