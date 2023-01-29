import { AlertContext } from "Context/AlertContext";
import { ModeContext } from "Context/ModeContext";
import { useContext } from "react";
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
  const [dark, setDark] = useContext(ModeContext);
  const showAlert = useContext(AlertContext);
  return (
    <nav>
      <CustomizedNavLink to="/" text="Home" />
      <CustomizedNavLink to="/about" text="About" />
      <CustomizedNavLink to="/yummy" text="Yummy" />
      <CustomizedNavLink to="/login" text="Login" />
      <CustomizedNavLink to="/starwars" text="StarWars" />
      <button
        onClick={() => {
          setDark((pre) => !pre);
        }}
      >
        {dark ? "☀" : "🌙"}
      </button>
      <button
        onClick={() => {
          showAlert({
            message: "welcome",
            type: "success",
          });
        }}
      >
        click to show alert
      </button>
    </nav>
  );
}
