import { FC } from "react";

import styles from "./standard-page.module.scss";

export const StandardPage: FC = () => {
    return (
        <div className={styles.content}>Standard page</div>
    );
}