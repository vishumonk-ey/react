import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Navbar (){
    const [completedTasks,setcompletedTasks] = useState(0)
    const [incompletedTasks,setincompletedTasks] = useState(0)
    const todos = useSelector((state)=>state.todos)
    const total= incompletedTasks + completedTasks
    useEffect(()=>{
        setcompletedTasks(()=>0)
        setincompletedTasks(()=>0)
        todos.forEach(eachTodo => {
            eachTodo.completed===true ? setcompletedTasks((prev)=>prev+1) : setincompletedTasks((prev)=>prev+1)
        });
    }
    ,[todos])
   
    return(
        <nav className="w-full bg-white">
            <div className="w-full px-5 py-3 md:px-8 flex justify-around items-center ">
                <p className="font-xl font-sans">My Todo</p>
                <select className="rounded-md bg-gray-100 cursor-pointer outline-none px-1 py-[2px]">
                    <option className="text-green-500/80">Completed : {completedTasks}</option>
                    <option className="text-red-500/80">Incompleted : {incompletedTasks}</option>
                    <option className="text-blue-500">Total Tasks : {total}</option>
                </select>
            </div>
        </nav>
    )
}