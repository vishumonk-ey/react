import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
export default function TodoList (){
    const todos = useSelector((state)=> state.todos)
    return(
        <div>
            {todos.map((eachTodo)=>(
                <TodoItem key={eachTodo.id} todo={eachTodo}></TodoItem>
            ))}
        </div>
    )
}