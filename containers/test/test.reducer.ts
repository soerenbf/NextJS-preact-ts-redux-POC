import { Reducer } from "redux";
import { IInitAction, TestAction } from "./test.actions";
import { ITestContainerState } from "./test.model";

type ITestAction = IInitAction;

const initialState: ITestContainerState = {
    count: 0
}

export const testReducer: Reducer<ITestContainerState, ITestAction> = (state = initialState, action) => {
    switch (action.type) {
        case TestAction.INIT: {
            return { ...state, count: state.count + 1 };
        }
        default: {
            return state;
        }
    }
};