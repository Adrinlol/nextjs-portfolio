import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Transition } from "components/Layout/Transition";

import { GlobalStyle } from "styles/globalStyles";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Transition location={router.pathname}>
        <Component {...pageProps} />
      </Transition>
    </ThemeProvider>
  );
}
