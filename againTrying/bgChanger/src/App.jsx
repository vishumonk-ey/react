import { useState } from "react"

 
function App() {
  let [color,setColor]=useState("olive")
  function handleClick(color){
    return function(){
      console.log("called",color);
       setColor(color)
    }
  }
  return (
    <div style={{backgroundColor: color}} className="w-full h-screen">
      <div class="btnContainer text-white absolute bottom-2 p-5 ">
      <button class="green" onClick={handleClick("green")}>green</button>
      <button class="yellow" onClick={handleClick("yellow")}>yellow</button>
      <button class="red" onClick={handleClick("red")}>red</button>
      <button class="orange" onClick={handleClick("orange")}>orange</button>
      </div>
    </div>
  )
}

export default App
