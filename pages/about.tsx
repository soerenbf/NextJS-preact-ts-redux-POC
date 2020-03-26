import styles from "./about.module.scss";

export default function About() {
    return (
        <div>
            <p className={`${styles.test} ${styles.another}`}>This is the about page</p>
        </div>
    );
}
