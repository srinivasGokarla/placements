import Rect, {useState} from "react"
import {Card} from "./Card"
import data from "../data.json"
import "./Restaurant.css"


const Restaurant = () => {
    const [res,setRes] = useState(data);
    const [filtrrating, setFilterraing] = useState(0);
  const [pay,setPay] = useState("all")
    
    const handleRating = (rating) => {
    setFilterraing(rating)
    }
    const handlePayment = (payment_methods) => {
       // console.log(payment_methods)
      setPay(payment_methods)
    }
    const filterLogic = ({rating, payment}) => {
       
        // console.log(data)
        return rating >= filtrrating ;

    }

    return (
        <>
    <h1>Restaurant Details</h1>
    {
        [4,3,2,1,0].map((rating)=>{
            return (
                <button key={rating} onClick={()=>handleRating(rating)} >{rating ? `${rating} and above`: "All"}</button>
        
            )
        })
    }
    {
        ["card", "cash", "upi", "all"].map((payment_methods) => {
            return (
                <button key={payment_methods} onClick={() => handlePayment(payment_methods)} >{payment_methods}</button>
            )
        })
    }
    <div className="Rest">
    {res.filter(filterLogic).map((item,index) => {
        return < Card key={item.id} {...item}/>
    })}
    </div>
</>
    ) 
}
export {Restaurant}