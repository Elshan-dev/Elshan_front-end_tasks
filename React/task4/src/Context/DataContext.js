import { createContext } from "react";

export const DataContext = createContext();
const data = {
  ad: "Elshan",
  age: 22,
};
export function DataContextComponent({ children }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
