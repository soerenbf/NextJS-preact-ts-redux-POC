import { takeLatest } from "redux-saga/effects";
import { TestAction } from "./test.actions";

function* onInit() {
    console.log("init");
}

export const testSagas = [
    takeLatest(TestAction.INIT, onInit)
]