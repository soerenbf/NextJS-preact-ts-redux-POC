import { AppProps } from "next/app";
import withRedux, { ReduxWrapperAppProps } from "next-redux-wrapper";
import { AppContextType } from "next/dist/next-server/lib/utils";
import withReduxSaga from "next-redux-saga";

import { configureStore } from "../store";

import "../styles/critical.scss";
import { TestAction } from "../containers/test/test.actions";
import { Provider } from "react-redux";

function App({ Component, pageProps, store }: ReduxWrapperAppProps) {
    return (
        <Provider store={store}>
            <main className="app__content">
                <Component {...pageProps} />
            </main>
        </Provider>
    );
}

App.getInitialProps = async ({ ctx: { store: { dispatch } } }: AppContextType) => {
    dispatch({ type: TestAction.INIT });
    console.log("getInitial");

    return {};
};

export default withRedux(configureStore)(withReduxSaga(App));