import { AuthProvider } from '@/context/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useIsClient } from 'usehooks-ts';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const isClient = useIsClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{isClient && <Component {...pageProps} />}</AuthProvider>
    </QueryClientProvider>
  );
}
