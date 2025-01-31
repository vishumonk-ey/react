import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/addTodo'
import TodoList from './components/todoList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoForm/>
      <TodoList/>
    </>
  )
}

export default App
