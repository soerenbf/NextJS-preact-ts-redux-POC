import { takeLatest, all, delay, fork } from "redux-saga/effects";
import { TestAction } from "./test.actions";

function* onInit() {
    console.log("start");
    yield delay(5000);
    console.log("done");
}

export const testSagas = [
    takeLatest(TestAction.INIT, onInit)
]