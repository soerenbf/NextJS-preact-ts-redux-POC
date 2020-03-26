import { NextPage } from "next";

import { StandardPage } from "../page-types/standard-page";

const pages = {
    Standard: StandardPage
}

const GenericPage: NextPage = () => {
    const Page = pages["Standard"];

    return (
        <Page />
    );
}

export default GenericPage;