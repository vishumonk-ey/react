import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
//   todos: [
//     // {
//     //   id: 1,
//     //   Text: "learning react",
//     //   completed: false,
//     // },
//   ],
    todos : JSON.parse(localStorage.getItem("todos")) || []
};

const todoSlice = createSlice({
    name : "Vishal",
    initialState,
    reducers:{

        addTodo: (state,action) => {
           const todo = {
                id : nanoid(),
                Text : action.payload ,
                completed : false
           } 
           state.todos.push(todo)
        },
        updateTodo : (state , action) => {
            const id = action.payload.id
            const newText = action.payload.text
            state.todos = state.todos.map((eachTodo)=>(
                eachTodo.id === id ? {...eachTodo , Text : newText} : eachTodo
            ))
        },
        removeTodo : (state,action) => {
            const delId=action.payload
            state.todos=state.todos.filter((eachTodo)=>(
                eachTodo.id != delId
            ))
        },
        toggle: (state , action) =>{
            const id = action.payload
            state.todos=state.todos.map((eachTodo) => (
                eachTodo.id === id ? {...eachTodo , completed : !(eachTodo.completed) } : eachTodo
            ))
        }
    }
});

export const {addTodo,updateTodo,removeTodo,toggle} = todoSlice.actions

export default todoSlice.reducer