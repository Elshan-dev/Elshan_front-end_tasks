import { Button } from "components/Button";
import { PageContainer } from "components/PageContainer";
import { useEffect, useRef, useState } from "react";
import styles from "../components/PageContainer/index.module.css";

const initialValue = {
  email: "",
  password: "",
  msgarea: "",
};

export function Contact({}) {
  const [input, setInput] = useState(initialValue);
  const emailInput = useRef();
  const passwordInput = useRef();
  const msgInput = useRef();

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
    <PageContainer>
      <div className={styles.contactForm}>
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
        <textarea
          ref={msgInput}
          onChange={({ target }) => {
            setInput({ ...input, msgarea: target.value });
          }}
          value={input.msgarea}
          id={styles.messageArea}
          placeholder="Send your kind words to Arda Turan"
        ></textarea>
        <Button
          bgColor="red"
          text="submit"
          Clicked={() => {
            console.log(input);
          }}
        />
      </div>
    </PageContainer>
  );
}
