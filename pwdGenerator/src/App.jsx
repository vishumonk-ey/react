import { useState,useCallback ,useEffect , useRef} from 'react'

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
 const copyPasswordtoClip = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
 },[password])
const passwordRef = useRef(null)
useEffect(()=>{
  passwordGenerator()
},
[length,numAllowed,charAllowed])
  return (
    <div className="w-full max-w-lg px-4 rounded-lg py-5 shadow-md mx-auto text-white bg-slate-800 ">
       <div className='flex rounded-lg shadow-md overflow-hidden'>
        <input type="text" 
          ref={passwordRef}
          className='outline-none w-full px-2 py-1 text-blue-300'
          placeholder='Password'
          value={password}
          readOnly
        />
        <button 
        className='bg-orange-400 cursor-pointer shrink-0 px-2 hover:bg-blue-300 '
        onClick={copyPasswordtoClip}
        >Copy</button>
       </div>
       <div className="flex mt-2 items-center gap-x-3">
            <div className='flex items-center gap-x-2'>
              <input 
              type="range"
              className='h-1'
              value={length}
              min={8}
              max={30}
              onChange={(e)=>setLength(e.target.value)}
              />
              <label>Length : {length}</label>
            </div>
            <div className='flex gap-x-1 ml-3'>
              <input type="checkbox" 
                checked={numAllowed}
                id='numberInput'
                onChange={
                  ()=>{setNumAllowed(!numAllowed)}
                }
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className='flex gap-x-1'>
              <input type="checkbox" 
                checked={charAllowed}
                id='characterInput'
                onChange={
                  ()=>{setCharAllowed(!charAllowed)}
                }
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
       </div>
    </div>
  )
}

export default App
