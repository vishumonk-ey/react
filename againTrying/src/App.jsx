import { Component, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContextProvider } from './Context' 
function App() {
  const [todos,setTodos]=useState([])
  const addTodo =(todo)=>{
    setTodos((prev)=>[...prev,todo
    ])
  }
  const updateTodo = (todo,id)=>{
    setTodos((prevTodos)=>(
      // let arr=[]
      // for (const eachTodo of prevTodos) {
      //   if(eachTodo.id===id){
      //       arr.push(todo)
      //   }else{
      //       arr.push(eachTodo)
      //   }
      // }
      // return arr
       prevTodos.map((eachTodo)=>(
        eachTodo.id===id ? todo : eachTodo
      ))
  ))
  }
  const deleteTodo = (id) =>{
      setTodos((prevTodos) =>(
          prevTodos.filter((eachTodo)=>(
            eachTodo.id!=id
          ))
      ))
  }
  const toggleComplete = (id) =>{
     setTodos((prevTodos)=>(
      prevTodos.map((eachTodo)=>(
        eachTodo.id===id ? {...eachTodo,completed :!eachTodo.completed} : eachTodo
      ))
     ))
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
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((eachTodo)=>(
                          <div className='w-full' key={eachTodo.id}>
                            <TodoItem todo={eachTodo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </TodoContextProvider>
  )
}

export default App
