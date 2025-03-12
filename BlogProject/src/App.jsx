import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Provider, useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {Outlet} from 'react-router-dom'
import { config } from './assets/conf/config'
import { login, logout } from './store/AuthSlice'
import {Header,Footer} from './components/index'
function App() {
   const [loading,setLoading] = useState(true)
   const dispatch = useDispatch()
   useEffect(()=>{
      authService.getUser()
        .then((userData) => {
            if(userData){
              dispatch(login(userData))
            }else{
              dispatch(logout())
            }
        }
        )
        .catch((err)=>console.log("getUser error",err))
        .finally(()=>{
          setLoading(false)
        })
  },[])
  if (loading) {
    return(
      <div className='min-w-full min-h-full flex items-center justify-center'>
        <div className='flex w-1/2 h-1/2 border rounded-lg shadow shadow-black'>Loading...</div>
    </div>
  )
  }else{
      return (
        <div className='min-h-screen flex flex-wrap content-between'>
          <div className='w-full block'>
            {/* <h1>heyyy</h1> */}
            <Header />
            <main>
              <Outlet/>
            </main>
            <Footer/>
          </div>
        </div>
      )
  }
}

export default App
