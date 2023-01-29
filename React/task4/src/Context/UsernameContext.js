import { createContext } from "react";

export const UsernameContext = createContext();
const data = { username: "elshan", email: "elschenism@gmail.com" };
export function UsernameContextComponent({ children }) {
  return (
    <UsernameContext.Provider value={data}>{children}</UsernameContext.Provider>
  );
}
