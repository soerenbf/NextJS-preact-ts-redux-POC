import { NextPage } from "next";
import { useEffect } from "react";
import { connect, DispatchProp } from "react-redux";

import { StandardPage } from "../page-types/standard-page";
import { TestAction } from "../containers/test/test.actions";

const pages = {
    Standard: StandardPage
}

const GenericPage: NextPage<DispatchProp> = props => {
    const { dispatch } = props;

    const Page = pages["Standard"];

    useEffect(() => {
        dispatch({ type: TestAction.INIT });
    }, [dispatch]);

    return (
        <Page />
    );
}

export default connect()(GenericPage);
