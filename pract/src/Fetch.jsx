import React, {useState,useEffect} from "react"


const Fetch = () => {
    const [data,setData] = useState(null)
      const getData = () => 
      fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
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
            <p>Id:  {item.id}</p>
            <p>Name:  {item.name}</p>
            <p> Email:  {item.email}</p>
            <p> Role:   {item.role}</p>
        </div>)}
    </div>
)
}
export {Fetch}