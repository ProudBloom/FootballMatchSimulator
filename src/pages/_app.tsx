import { SimulationContextProvider } from '@/contexts/SimulationContext/SimulationContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SimulationContextProvider>
      <Component {...pageProps} />
    </SimulationContextProvider>
  );
}
