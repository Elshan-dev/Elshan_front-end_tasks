import { useEffect, useRef, useState } from "react";
import { addGmail } from "../../utils";
import { Button } from "../Button";
import styles from "./index.module.css";

const initialValue = {
  email: "",
  password: "",
};

export function Login() {
  const [input, setInput] = useState(initialValue);
  const emailInput = useRef();
  const passwordInput = useRef();

  useEffect(() => {
    emailInput.current.focus();
    console.log("Mounted");
  }, []);
  useEffect(() => {
    console.log("Input changed");
  }, [input]);
  useEffect(() => {
    return () => {
      console.log("Unmounted");
    };
  }, []);
  return (
    <div className={styles.form}>
      <input
        ref={emailInput}
        onChange={({ target }) => {
          setInput({ ...input, email: target.value });
        }}
        value={input.email}
        type="email"
        placeholder="enter your email"
      />
      <input
        ref={passwordInput}
        onChange={({ target }) => {
          setInput({ ...input, password: target.value });
        }}
        value={input.password}
        type="password"
        placeholder="enter your password"
      />
      <Button
        bgColor="red"
        text="submit"
        Clicked={() => {
          console.log(input);
        }}
      />
      <Button
        bgColor="red"
        text="add gmail"
        Clicked={() => {
          setInput({ ...input, email: addGmail(input.email) });
        }}
      />
    </div>
  );
}
