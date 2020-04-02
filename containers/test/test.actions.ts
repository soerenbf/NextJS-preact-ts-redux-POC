import { Action } from "redux";

export enum TestAction {
    INIT = "@@test/INIT"
}

export interface IInitAction extends Action<TestAction.INIT> {
    config?: string;
}

export function init(): IInitAction {
    return { type: TestAction.INIT };
}