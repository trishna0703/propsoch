import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__logo}>propsoch</div>
      </div>
    </header>
  );
}
