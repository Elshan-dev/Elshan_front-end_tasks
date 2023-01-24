import styles from "./index.module.css";
import { NavBar } from "./NavBar";

export function PageContainer({ children }) {
  return (
    <>
      <header className={styles.header}>
       <NavBar/>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>All rights reserved © 2023</footer>
    </>
  );
}
