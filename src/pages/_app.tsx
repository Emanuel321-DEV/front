import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/global';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient';
import { AuthContextProvider } from '../contexts/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>

        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </AuthContextProvider>
  
  )

}
