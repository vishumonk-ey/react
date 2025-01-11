import {useEffect,useState} from 'react'

function useCurrencyInfo(currency){ 
    useEffect(()=>{
        // const [data,setData]=useState({})
        let data;
        const url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
            .then((response)=>JSON.parse(response))
            .then((json)=> data=json
            )
    },[currency])
    return data
}

// why we used useEffect?

export default useCurrencyInfo