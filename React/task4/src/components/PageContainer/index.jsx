import { NavLink } from "react-router-dom";
import { FooterComponent } from "./Footer";
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
      }}><FooterComponent/></footer>
    </>
  );
}
