import Navbar from "../Components/Navbar";
import cartImg from "../../image/bag/cart.png";
import MyCart from "../Components/MyCart";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:3000/cart`).then((res) => {
      const updatedCart = res.data.map((item) => ({ ...item, quantity: 1 }));
      setCart(updatedCart);
    });
  }, []);


  return (

    <div className="bg-bb w-full min-h-screen">
      <Navbar />
     
      
        <MyCart cart={cart} setCart={setCart} />
      

      <div className={`${cart.length > 0 && "hidden"} `}>
      <h1 className="my-[30px] mx-[50px] text-[34px] font-roboto font-bold">
        Shopping cart
      </h1>
        <div className="flex flex-col items-center gap-y-6 font-roboto">
          <img src={cartImg} className="m-auto mt-[-40px] w-[200px]" />
          <h1 className="font-bold text-[20px]">
            Your shopping cart is empty.
          </h1>
          <p className="text-[20px]">
            Add products to your cart and order on shoppo to stay{" "}
          </p>
          <button className="w-[280px] text-[20px] font-roboto capitalize text-white rounded-[20px] bg-oranged h-[50px]">
            start sourcing
          </button>
        </div>
      </div>
    </div>
  );
}
