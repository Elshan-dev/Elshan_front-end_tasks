import { useState } from "react";
import { Button } from "./Button";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <Button
        bgColor="green"
        text="+"
        Clicked={() => {
          setCount(count + 1);
        }}
      />
      <Button
        bgColor="red"
        text="-"
        Clicked={() => {
          setCount(count - 1);
        }}
      />
      <Button
        bgColor="blue"
        text="log"
        Clicked={() => {
          console.log(count);
        }}
      />
      <Button
        bgColor="purple"
        text="reset"
        Clicked={() => {
          setCount(0);
        }}
      />
      <Button
        bgColor="yellow"
        text="special"
        Clicked={() => {
          let numb = +prompt("enter number");
          setCount(numb);
        }}
      />
    </>
  );
}
