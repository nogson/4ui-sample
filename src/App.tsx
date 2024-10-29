import { useState } from "react";
import "./App.css";
import Navi from "./components/Navi/Navi";

function App() {
  const [isStart, setIsStart] = useState(false);
  const start = () => {
    setIsStart(true);
  };

  return (
    <>
      <div className="wrapper">
        {isStart ? <Navi /> : <button onClick={start}>スタート</button>}
      </div>
    </>
  );
}

export default App;
