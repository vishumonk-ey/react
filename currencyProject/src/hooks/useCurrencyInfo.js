import {useEffect,useState} from 'react'


export default function useCurrencyInfo(currency){ 
    
       const [data,setData]=useState({}) 
    //  if we use local variable data then when after calling this hook in our App.jsx it doesnt shows the data because it uses the default value of data and then assigns it as the call is asynchronus , after some time data will be updated but the components wont re-render. 
         useEffect(()=>{
            console.log(currency);
        const url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
            .then((response)=>response.json())
            .then((json)=> {
                // console.log(json);
                setData(json[currency])
            })
            .catch((err)=>console.log("error occured" ,err))       
    },[currency])
    return data //async call will take time so it will return and move on and the asyn call is handled to web ApI. right?
    // after some time when the fetch is done then data state is updated then react will check the virtual Dom for all the components that use the data state and re-render those components only
}


