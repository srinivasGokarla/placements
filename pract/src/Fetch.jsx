import React, {useState,useEffect} from "react"


const Fetch = () => {
    const [data,setData] = useState(null)
      const getData = () => 
      fetch("https://snapdeal-backend.herokuapp.com/men")
      .then((res)=> res.json())

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])
return (
    <div>
        <h1>Fetch</h1>
        {data?.map((item) =>
        <div>
            <hr/>
            <p>Id:  {item._id}</p>
            <p>images:  {item.images}</p>
            <p> original_price:  {item.original_price}</p>
            <p> sizes: {item.sizes.join(" ")}</p>
            <p> rating: {item.rating}</p>
            <p> title: {item.title}</p>
           
            
           
        </div>)}
    </div>
)
}
export {Fetch}