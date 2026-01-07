import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [loading , setLoading] = useState(true)
  const url = 'https://jsonplaceholder.typicode.com/posts'
  // let userData = []
  const [userData , setUserData] = useState([])
  const [userInput , setUserInput] = useState("")
  const fetchData = async ()=>{
    try {
      const res = await fetch(url)
      if ( res ){
          // userData = data
          const data = await res.json()
          setUserData(data)
          console.log(data);
          setLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchData()
    // console.log("hi"); 
  } , [])

  const handleSearch = () => {
    const re = new RegExp( userInput , "i" )
      const updated = userData.filter((eachItem) => re.test(eachItem.title))
      setUserData(updated)
  }
   return (
    loading ? (<div>
      Loading
    </div>) : (<form onSubmit={(e) => {
      e.preventDefault() // aisa kyu ?
      handleSearch()
    }} >

      <input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
      <button type='submit' >search</button>

      <ul>
        {userData.map((eachItem)=>
          <li key={eachItem.title} >
            {eachItem.title}
          </li>
        )}
        </ul>

    </form>)
   )
}

export default App
