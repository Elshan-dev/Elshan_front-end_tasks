import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import {Main} from "./components/Main"

function App() {
  return (
  <>
<Header text="BMW" bgColor="blue"/>  
<Main heading="E46" text="330M" width="50%" height="50%"/>
<Footer text="You can stick a BMW badge on a dead cat - and people would still buy it." bgColor="red"/>
  </>
  );
}

export default App;
