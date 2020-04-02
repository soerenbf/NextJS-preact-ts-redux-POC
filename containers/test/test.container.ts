import { generateContainer } from "../base/generate-container";
import { init } from "./test.actions";
import { IStoreState } from "../../store/store.model";

const actions = {
    init
};

function mapState(state: IStoreState) {
    return state.test;
}

export const [TestContainer, connectWithTest, useTest] = generateContainer(mapState, actions);