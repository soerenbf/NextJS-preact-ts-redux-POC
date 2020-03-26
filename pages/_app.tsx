import { AppProps } from "next/app";

import "../styles/critical.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp;