import { all } from "redux-saga/effects";

import { testSagas } from "../containers/test/test.saga";

export function* rootSaga() {
    yield all([
        ...testSagas
    ]);
}