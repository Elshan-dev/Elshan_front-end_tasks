import { UsernameContext } from "Context/UsernameContext";
import { useContext } from "react";
import styles from "./index.module.css";

export function FooterComponent({data}) {
  const showUsername = useContext(UsernameContext);
  console.log(showUsername)
  return <h1 className={styles.headingClass}>email:{showUsername.email} <br/> username:{showUsername.username}</h1>;
}
