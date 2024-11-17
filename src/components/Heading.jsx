import styles from "./Heading.module.css";

export default function Heading({ level, children }) {
  if (level === 1) {
    return <h1 className={styles.title}>{children}</h1>;
  }
}
