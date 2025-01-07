import { useState } from "react";
// useState is a hook,hooks are used for managing states.
// states-> can be said as variables but with extra powers
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);
  // counter is state here
  // useState gives two things- one the variable itself and second an method.
  const addValue = () => {
    if (counter < 20) {
      setCounter(++counter); // dont directly increment the state value as counter's local value is updated but react hasnt updated the state yet
      setCounter(counter*2);
      setCounter(counter*3);
//---> react waits for all the state changes to happen and when all the state changes happen it updates the state and re-renders the component
// react keeps the state variable's value fixed throught the one event handler so i need not worry about whether the value has changed or not.
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
