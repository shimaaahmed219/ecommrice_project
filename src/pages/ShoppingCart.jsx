import Navbar from "../Components/Navbar";
import cart from '../../image/bag/cart.png'

export default function ShoppingCart() {
  return (
    <div className="bg-bb w-full min-h-screen">
<Navbar/>
<h1 className="my-[30px] mx-[50px] text-[34px] font-roboto font-bold">Shopping cart</h1>
   <div className="flex flex-col items-center gap-y-6 font-roboto">
   <img src={cart} className="m-auto mt-[-40px] w-[200px]"/>
   <h1 className="font-bold text-[20px]" >Your shopping cart is empty.</h1>
   <p className="text-[20px]">Add products to your cart and order on shoppo to stay </p>
   <button className="w-[280px] text-[20px] font-roboto capitalize text-white rounded-[20px] bg-oranged h-[50px]">start sourcing</button>
   </div>
  
   
    </div>
  )
}
