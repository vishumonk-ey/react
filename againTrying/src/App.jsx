import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './Context' 
function App() {
  const [todos,setTodos]=useState([])
  const addTodo =(todo)=>{
    setTodos((prev)=>[...prev,{
      id: todo,
      todo : todo, //might create error and confusion ki konsa value hai
      completed : false,
    }
    ])
  }
  const updateTodo = (todo,id)=>{

  }
  const deleteTodo = () =>{}
  const toggleComplete = () =>{

  }
  useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem("todos"))
    if( savedTodos && savedTodos.length > 0 ){
      setTodos(savedTodos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
// local storage input bhi string me lega and output bhi string me dega to json me convert krna
  return (
          <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
          </TodoContextProvider>
  )
}

export default App
