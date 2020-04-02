import { cancelled, select } from "redux-saga/effects";

import { IActionWithCallback } from "./base.actions";
import { BaseService, IBaseService } from "@mda/services/base/base.service";
import { IHttpModuleState, IHttpContainerState, IHttpClient } from "../http/http";
import memoize from "lodash.memoize";
import { isBrowser } from "@mda/helpers/browser.helper";

/**
 * @author SBF
 *
 * @description
 * Is dependant generator function to throw error to correctly identify if the generator funtion was successfully run.
 * If error is handled in generator function passed into "withCallback", throw error after handling error locally.
 *
 * @example
 *  const saga = withCallback(function* onAction(action: ISomeAction) {
 *      try {
 *          yield someTaskThrowingError(action);
 *      } catch (e) {
 *          // local error handling
 *          ...
 *
 *          throw e;
 *      }
 *  })
 */
export function withCallback<TAction extends IActionWithCallback>(
    gen: (action: TAction) => Generator
): (action: TAction) => Generator {
    return function* callbackHandler(action: TAction) {
        let success: boolean = true;

        try {
            yield gen(action);
        } catch {
            success = false;
        } finally {
            const wasCancelled = yield cancelled();

            if (action.callback !== undefined && !wasCancelled) {
                action.callback(success);
            }
        }
    };
}

export function* getService<TBaseService extends BaseService>(Service: IBaseService<TBaseService>) {
    const http: IHttpContainerState = yield select((s: IHttpModuleState) => s.http);

    if (isBrowser) {
        return getMemoizedService(Service, http!);
    }

    return new Service(http!);
}

const getMemoizedService = memoize((Service: IBaseService<any>, http: IHttpClient) => {
    return new Service(http);
});
