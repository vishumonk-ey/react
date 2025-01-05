import { useState } from "react";
// useState is a hook,hooks are used for managing states.
// states-> can be said as variables but with extra powers
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // counter is state here
  // useState gives two things- one the variable itself and second an method.
  const addValue = () => {
    if (counter < 20) {
      setCounter(++counter);
    }
    // counter variable is being increased but there is issue in UI  updation , here comes the role of hooks
  };
  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(--counter);
    }
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button id="add" onClick={addValue}>
        add Value {counter}
      </button>
      <button id="decrease" onClick={decreaseValue}>
        remove value {counter}
      </button>
    </>
  );
}

export default App;
