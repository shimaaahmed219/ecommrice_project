import { Link } from "react-router-dom"
import { IoMdHome } from "react-icons/io";
 import { FaEye } from "react-icons/fa";
 import { FaFacebookMessenger } from "react-icons/fa";
 import { FaShoppingCart } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex fixed bottom-0 bg-bgMob h-[50px] w-full">
<ul className="flex justify-between px-5 h-full items-center text-[12px] font-inter w-full">
   <li className="flex-col flex items-center ">
< IoMdHome className="text-[15px]"/>
    <Link to="/">Home</Link>
   </li>

   <li className="flex-col flex items-center ">
    < FaEye className="text-[15px]"/>
    <Link>Tops</Link>
   </li>

   <li className="flex-col flex items-center ">
    <FaFacebookMessenger  className="text-[15px]"/>
    <Link>messenger</Link>
   </li>

   <li className="flex-col flex items-center ">
    <FaShoppingCart className="text-[15px]"/>
    <Link to="/cart">cart</Link>
   </li>

</ul>
    </div>
  )
}
