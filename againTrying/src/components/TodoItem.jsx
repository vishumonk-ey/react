import React from "react";
import { useTodo } from "../Context";
import { useState } from "react";
function TodoItem({ todo }) {
    // directly aise kar diya kruki loop laga ke karunga and har ek iteration me single todo dedunga as a prop jisko yahapr destructure krliya hai 
    const {updateTodo,deleteTodo,toggleComplete}=useTodo()
    const [isTodoEditable,setIsTodoEditable]=useState(false)
    const [todoMsg,setTodoMsg] =useState(todo.todo)
    const editTodo = () =>{
        updateTodo({
            ...todo,
            todo:todoMsg,
        },todo.id)
        setIsTodoEditable(false)
    }
    window.addEventListener('keydown',(e)=>{
        if (e.key=="Enter" && isTodoEditable){
            editTodo()
        }
    })
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={()=>{
                    toggleComplete(todo.id)
                    // setIsTodoEditable((prev)=> !prev )
                }}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                    // here , isTodoEditable is getting the value true for the first time.
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
