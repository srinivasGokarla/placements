import React,{useState,useEffect} from "react";


export const Counter = () => {
    const [counter,setCounter]  = useState(0)
    useEffect(() => {
        document.title = `chats(${counter})`
    })
   
return (
    <div>
     <h1>Count:{counter}</h1>
    <button onClick={() => setCounter(counter + 1)} >+</button>
    <button onClick={() => setCounter(counter - 1)}>-</button>
</div>
)

}