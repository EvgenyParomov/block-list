import type { AppProps } from "next/app";
import { AppProvider } from "./app-provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}
