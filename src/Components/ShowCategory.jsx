import axios from "axios"
import { useEffect, useState } from "react"


export default function ShowCategory() {
    const [data,setData] = useState([])
    useEffect(()=>{
axios.get(`http://localhost:3000/category`).then((res)=>setData(res.data))

    },[])
    console.log(data);
  return (
    <div className="grid grid-cols-6 m-auto ">
{data.map((item)=>(
    <div className="rounded-full h-[100px] w-[100px]" key={item.id}><img className=" w-=full h-full rounded-full" src={item.image}/></div>
))}
    </div>
  )
}
