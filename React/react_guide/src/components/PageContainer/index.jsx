import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { NavBar } from "./NavBar";

export function PageContainer({ children }) {
  return (
    <>
      <header className={styles.header}>
       <NavBar/>
      </header>
      <main>{children}</main>
      <footer>2023</footer>
    </>
  );
}
