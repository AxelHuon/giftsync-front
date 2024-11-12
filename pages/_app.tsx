import { Toaster } from '@/components/atoms/Toast/toaster'
import { AuthProvider } from '@/hooks/useAuth'
import { cn } from '@/lib/utils'
import { SettingsProvider } from '@/providers/SettingsProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useIsClient } from 'usehooks-ts'
import './global.css'

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient()
    const isClient = useIsClient()

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
                        {/*Render if isClient is true but wait also */}
                        {isClient && (
                            <>
                                <main
                                    className={cn(
                                        'bg-background font-sans antialiased'
                                    )}
                                >
                                    <Component {...pageProps} />
                                </main>
                                <Toaster />
                            </>
                        )}
                    </SettingsProvider>
                </AuthProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}
