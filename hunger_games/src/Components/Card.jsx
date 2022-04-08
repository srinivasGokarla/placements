import React from 'react'


const Card = (props) => {
   // console.log(props)
    const newPayment = Object.entries(props.payment_methods).map(item=>item[1]?item[0]:"")
return (
    <>
<div style={{border: '1px solid black',
    margin :"10px"}}>
        <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
    <div style={{flex: 2}}>
        <img src = {props.image} alt={props.Restaurant_name}  width="200px" height="200px"/>
    </div>
    <div>
        <h3>{props.Restaurant_name}</h3>
        <p>{props.categories}</p>
        <p>Cost: {props.costforone}₹</p>
        <p>Accepts: {newPayment.join(",")}</p>
    </div> 
    <div>
        <div style={{backgroundColor:"green", padding:"10px", borderRadius:"5PX"}}>{props.rating}</div>
        <div>{props.votes} votes</div>
        <div>{props.reviews} reviews</div>
    </div>
</div>
</div>
</>
) 
}

export {Card}