import { useState,useCallback } from 'react'

function App() {
 const [length,setLength]=useState(8)
 const [numAllowed,setNumAllowed] =useState(false)
 const [charAllowed,setCharAllowed] =useState(false)
 const [password,setPassword]=useState("") //why is it needed?
 const passwordGenerator= useCallback(()=>{
    let pwd=""
    let str="ABCDEFGHIJKLMOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="<>./;'{}[]"

    for(let i = 0 ; i < length ; i++){
      const randomNum = Math.floor(Math.random() * str.length)
      const char = str.charAt(randomNum)
      pwd+=char
    }
    setPassword(pwd)
 } 
 , [length,numAllowed,charAllowed])

  return (
    <div className="w-full max-w-lg text-white bg">
      Blue
    </div>
  )
}

export default App
