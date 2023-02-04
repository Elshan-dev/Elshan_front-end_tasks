import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { NavBar } from "./NavBar";

export function PageContainer({ children ,className ,style}) {
  return (
    <>
      <header className={styles.header}>
       <NavBar/>
      </header>
      <main className={className} style={{...style,minHeight:'100vh'}}>{children}</main>
      <footer style={{
        backgroundColor:'green'
      }}>2023</footer>
    </>
  );
}
