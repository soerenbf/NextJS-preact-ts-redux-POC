import { AppProps } from "next/app";

import "../styles/critical.scss";

function App({ Component, pageProps }: AppProps) {
    return (
        <main className="app__content">
            <Component {...pageProps} />
        </main>
    );
}

App.getInitialProps = (ctx: any) => {
    console.log(ctx);

    return {};
};

export default App;