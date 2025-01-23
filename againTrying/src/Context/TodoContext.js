import React, { createContext } from 'react'

export const todoContext = createContext({
    todos:[
        {
            id:1,
            todo:"make a todo app",
            completed:false,
        }
    ] ,
    addTodo:(todo)=>{},
    updateTodo : (todo , id) => {} ,
    deleteTodo : (id) =>{} ,
    toggleComplete : (id)=>{}
})