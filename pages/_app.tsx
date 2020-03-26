import withRedux, { ReduxWrapperAppProps } from "next-redux-wrapper";
import { AppContextType } from "next/dist/next-server/lib/utils";
import withReduxSaga from "next-redux-saga";
import { Provider } from "react-redux";

import { configureStore } from "../store";
import "../styles/critical.scss";
import { TestAction } from "../containers/test/test.actions";

function App({ Component, pageProps, store }: ReduxWrapperAppProps) {
    return (
        <Provider store={store}>
            <main className="app__content">
                <Component {...pageProps} />
            </main>
        </Provider>
    );
}

App.getInitialProps = ({ ctx: { store: { dispatch } } }: AppContextType) => {
    dispatch({ type: TestAction.INIT });

    return {};
};

export default withRedux(configureStore)(withReduxSaga(App));