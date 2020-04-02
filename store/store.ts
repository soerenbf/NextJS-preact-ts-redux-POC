import { MakeStore } from "next-redux-wrapper";
import { createStore, applyMiddleware, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./store.reducer";
import { rootSaga } from "./store.saga";
import { IStoreState } from "./store.model";

const bindMiddleware = (...middleware: Middleware[]) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }

    return applyMiddleware(...middleware)
}

export const configureStore: MakeStore = (initialState: IStoreState = {} as IStoreState, { isServer, req }) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, initialState, bindMiddleware(sagaMiddleware));

    if (req || !isServer) {
        (store as any).sagaTask = sagaMiddleware.run(rootSaga);
    }

    return store;
};