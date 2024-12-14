import { Toaster } from '@/components/atoms/Toast/toaster'
import MobileMenuBar from '@/components/layouts/MobileMenuBar/MobileMenuBar'
import SideBar from '@/components/layouts/SideBar/SideBar'
import { AuthProvider, useAuthContext } from '@/hooks/useAuth'
import { SettingsProvider, useSettings } from '@/providers/SettingsProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import React from 'react'
import { useIsClient } from 'usehooks-ts'
import './global.css'

function AppLayout({ Component, pageProps }: AppProps) {
    const isClient = useIsClient()
    const { sideBarIsOpen } = useSettings()

    const { authState } = useAuthContext()

    return (
        <>
            {isClient && (
                <>
                    <main>
                        {authState?.id ? (
                            <article
                                className={'w-full px-[5%] flex justify-end'}
                            >
                                <SideBar />
                                <MobileMenuBar />
                                <div
                                    className={`transition-[width] w-full duration-200 ${
                                        sideBarIsOpen
                                            ? 'tablet:w-[calc(100%-350px)]'
                                            : 'tablet:w-[calc(100%-160px)]'
                                    } py-5 tablet:py-10`}
                                >
                                    <Component {...pageProps} />
                                </div>
                            </article>
                        ) : (
                            <Component {...pageProps} />
                        )}
                    </main>
                    <Toaster />
                </>
            )}
        </>
    )
}

export default function App({ Component, pageProps, router }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 2, // Number of retries
            },
        },
    })
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <AuthProvider>
                    <SettingsProvider>
                        <AppLayout
                            router={router}
                            Component={Component}
                            pageProps={pageProps}
                        />
                    </SettingsProvider>
                </AuthProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}
