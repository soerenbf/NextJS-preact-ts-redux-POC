import { ComponentType } from "react";
import { Dispatch, bindActionCreators, AnyAction, ActionCreatorsMapObject } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";

import { IBaseContainerProps, generateBaseContainer } from "./base.container";

/**
 * @author SBF
 *
 * @description
 * The props rendered/exposed by the container component/HoC
 */
export type IContainerProps<TState, TActions = {}> = TState & TActions;

/**
 * @author SBF
 *
 * @description
 * Generates a redux container for a substate of the redux store.
 *
 * @param {IMapStateFn} mapStateFn state mapping function as normally used for connect in react-redux.
 * @param {Object} [mapActionsObject] key value pair of action creators and respective names.
 * @param {boolean} pure If true, implements shouldComponentUpdate and shallowly compares the result of mergeProps.
 *
 * @example
 * const mapState = (state: IStoreState): ISubState => state.subState;
 * const actions = {
 *     anAction: () => ({ type: "AN_ACTION" }),
 *     another: () =>  ({ type: "ANOTHER_ACTION" })
 * }
 *
 * const [SubstateContainer, connectWithSubstate, useSubstate] = generateContainer(mapState, actions);
 */
export function generateContainer<TSubState, TActionsMap extends ActionCreatorsMapObject<AnyAction>, TStoreState = any>(
    mapStateFn: (state: TStoreState) => TSubState,
    mapActionsObject: TActionsMap = {} as TActionsMap,
    pure = true
): [typeof Container, typeof connectWithContainer, () => TSubState & typeof mapActionsObject] {
    const mapActions = (dispatch: Dispatch) => bindActionCreators(mapActionsObject, dispatch);

    type TContainerProps = IContainerProps<TSubState, typeof mapActionsObject>;

    function connectWithContainer<TOwnProps = {}>(comp: ComponentType<TContainerProps & TOwnProps>) {
        return connect<TSubState, typeof mapActionsObject, TOwnProps, TStoreState>(mapStateFn, mapActions, null, { pure })(comp as any);
    }

    const Container = connectWithContainer<IBaseContainerProps<TContainerProps>>(generateBaseContainer());

    function useContainer(): TSubState & typeof mapActionsObject {
        const dispatch = useDispatch();

        const state = useSelector(mapStateFn);
        const actions = mapActions(dispatch);

        return { ...state, ...actions };
    }

    return [Container, connectWithContainer, useContainer];
}
