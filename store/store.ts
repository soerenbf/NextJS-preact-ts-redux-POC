import { MakeStore } from "next-redux-wrapper";
import { createStore } from "redux"

import { rootReducer } from "./store.reducer";

export const configureStore: MakeStore = (initialState = {}) => {
    return createStore(rootReducer, initialState);
};