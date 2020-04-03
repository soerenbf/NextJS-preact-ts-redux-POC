import { FC } from "react";

import styles from "./standard-page.module.scss";
import { TestContainer } from "containers/test/test.container";

export const StandardPage: FC = () => {
    return (
        <TestContainer>
            {({ count }) => (
                <div className={`${styles.content} ${styles.test} ${styles["test--mod"]}`}>Standard page</div>
            )}
        </TestContainer>
    );
}