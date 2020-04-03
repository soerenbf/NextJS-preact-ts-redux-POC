import { FC } from "react";

import styles from "./standard-page.module.scss";

export const StandardPage: FC = () => {
    return (
        <div className={`${styles.content} ${styles.test} ${styles["test--mod"]}`}>Standard page</div>
    );
}