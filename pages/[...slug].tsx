import { NextPage } from "next";
import { useEffect } from "react";

import { StandardPage } from "../page-types/standard-page";
import { useTest } from "../containers/test/test.container";

const pages = {
    Standard: StandardPage
}

const GenericPage: NextPage = props => {

    const Page = pages["Standard"];
    const { init } = useTest();

    useEffect(() => {
        init();
    }, []);

    return (
        <Page />
    );
}

export default GenericPage;
