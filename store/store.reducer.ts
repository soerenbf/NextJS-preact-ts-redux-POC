import { combineReducers } from "redux";

import { testReducer } from "../containers/test/test.reducer";

export const rootReducer = combineReducers({
    test: testReducer
});