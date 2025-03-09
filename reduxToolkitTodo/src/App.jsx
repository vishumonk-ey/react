import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
function App() {
  const todos = useSelector((state) => {
    // console.log(state.todos);
    return state.todos;
  });
  console.log(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Navbar />
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
