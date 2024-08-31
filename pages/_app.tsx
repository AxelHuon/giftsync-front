import { ToggleButtonMode } from '@/components/atoms/Buttons/ToggleButtonMode/ToggleButtonMode';
import { AuthProvider } from '@/context/AuthProvider';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useIsClient } from 'usehooks-ts';
import './global.css';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const isClient = useIsClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AuthProvider>
          {isClient && (
            <>
              <main
                className={cn('h-[100vh] bg-background font-sans antialiased')}
              >
                <Component {...pageProps} />
                <div className={'fixed container mx-auto bottom-[5%]'}>
                  <ToggleButtonMode />
                </div>
              </main>
            </>
          )}
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
