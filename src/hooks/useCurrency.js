import { useEffect,useState } from "react"

// Creating custom hooks
function useCurrencyInfo(currency){
    const [data,sedata]=useState({})
    //  in this function useEffect hook is used to call the api 
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=> res.json())  // .json() means to convert the response into  json format
        .then((res)=>sedata(res[currency]) )  
        console.log(data)
    },[currency])  
    console.log(data);
    return data 
}

export default  useCurrencyInfo;