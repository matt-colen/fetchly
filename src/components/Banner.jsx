import styles from "./Banner.module.css";

export default function Banner({ children }) {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={styles["banner-content"]}>{children}</div>
    </div>
  );
}
