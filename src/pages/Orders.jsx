import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import OrderSaidebar from "../Components/OrderSaidebar";
import axios from "axios";

export default function Orders() {

  const [orders,setOrders] =useState([])
  useEffect(()=>{
axios.get(`http://localhost:3000/orders`).then((data)=>setOrders(data.data))
  },[])
  console.log(orders);
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="flex h-full">
        <OrderSaidebar />

      </div>
    </div>
  );
}
