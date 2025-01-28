import React, { createContext, useContext } from 'react'

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

export const TodoContextProvider = todoContext.Provider

export const useTodo = () => {
    return useContext(todoContext)
}