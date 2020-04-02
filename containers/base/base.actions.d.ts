import { Action, AnyAction } from "redux";

interface IActionWithCallback<TAction = any> extends Action<TAction> {
    callback?: (success: boolean) => void;
}
