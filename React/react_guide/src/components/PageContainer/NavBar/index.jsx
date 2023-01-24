import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

function CustomizedNavLink({ to, text }) {
  return (
    <NavLink
      className={({ isActive }) => {
        if (isActive) {
          return styles.activeLink;
        }
      }}
      to={to}
    >
      {text}
    </NavLink>
  );
}

export function NavBar({}) {
  return (
    <nav>
      <CustomizedNavLink to="/" text="Home" />
      <CustomizedNavLink to="/about" text="About" />
    </nav>
  );
}
