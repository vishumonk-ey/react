import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github(){
    const data = useLoaderData()
    // const[data,setData]=useState("")
    // useEffect(()=>{
    //     const url="https://api.github.com/users/vishumonk-ey"
    //     fetch(url)
    //         .then((res)=>res.json())
    //         .then((json)=>{
    //             setData(json)
    //             console.log(json)
    //         })
    // },[])
    return(
        <div className="text-3xl text-black font-mono font-bold text-center">
            Github Followers : {data.bio}
            <img src={data.avatar_url} className="h-28 w-28"/> 
        </div>

    )
}

//whats the need of giving useEffect if it has to run everytime my github component renders 


export const githubInfoLoader=async ()=>{
    const respone =await fetch("https://api.github.com/users/vishumonk-ey")
    return respone.json()
    // even though it is returning the promise but the react router's loader mechanism resloves the returned promise interally and sends the resolved value .
    // or simply i can return the json
}