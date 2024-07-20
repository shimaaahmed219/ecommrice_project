import { useState, useEffect } from "react";
import OrderSaidebar from "../Components/OrderSaidebar";
import Footer from "../Components/Home/Hommop/Footer";
import cartImg from "../../image/bag/cart.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormControlLabel, Checkbox } from "@mui/material";
import Navbar from "../Components/Navbar";
import Nav from "../Components/landingPage/LandMop/Nav";



export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const incrementQuantity = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const totalPrice = cart
    .reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity, 10) || 1; // Default quantity to 1
      return total + price * quantity;
    }, 0)
    .toFixed(2);

  return (
    <>
    <div className="md:block hidden">

    <Navbar/>
    </div>
    <div className="md:hidden block mb-5">
        <Nav/>
    </div>
     <div className="flex">
      <div className="lg:block hidden">
      <OrderSaidebar />
      </div>
      <div className={`${cart.length>0?"border-2" :""}  lg:w-[70%] w-[80%] m-auto my-10 lg:ms-auto xl:mr-[80px] max-h-[600px] bg-white`}>
    <div>
    <div className={` ${cart.length>0?"flex" :"hidden"}  justify-between my-5 px-10`}>
          <h3 className="font-roboto capitalize sm:text-[20px] text-[15px] font-bold">
            select all
          </h3>
          <h3 className="font-roboto sm:text-[20px] text-[15px] capitalize font-bold">
            total: {totalPrice}{" "}
            <span className="uppercase text-oranged">egp</span>
          </h3>
        </div>
        <hr className="w-full h-[2px] mt-5 bg-gray-200" />
    </div>

        {cart.length > 0 ? (
            
          cart.map((item, index) => (

            <div key={item.id} className=" ">
              
              <div className="flex justify-between  items-center pr-5">
                <img className="sm:w-[80px] m-2 sm:h-[80px] w-[40px] h-[40px]" src={item.image} alt={item.title} />
                <h1 className=" sm:block hidden font-roboto xl:text-[16px] sm:text-[14px] text-[12px] font-bold capitalize">
                  {item.title.substring(0, 20)}
                </h1>
                <h1 className=" sm:hidden block font-roboto xl:text-[16px] sm:text-[14px] text-[12px] font-bold capitalize">
                  {item.title.substring(0, 10)}
                </h1>
                <h1 className="font-roboto xl:text-[16px] sm:text-[14px] text-[12px] font-bold capitalize">
                  {(item.price * (item.quantity || 1)).toFixed(2)}{" "}
                  <span className="uppercase text-oranged">egp</span>
                </h1>
                <div className=" xl:flex hidden   justify-between items-center w-[100px]">
                  <button
                    onClick={() => incrementQuantity(index)}
                    className="hover:text-oranged font-bold text-[20px] w-[30px] h-[30px] rounded-full bg-gray-200 flex justify-center items-center"
                  >
                    +
                  </button>
                  <button className="text-[20px]">{item.quantity || 1}</button>
                  <button
                    onClick={() => decrementQuantity(index)}
                    className="hover:text-oranged font-bold text-[20px] w-[30px] h-[30px] rounded-full bg-gray-200 flex justify-center items-center"
                  >
                    -
                  </button>
                </div>
               
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-oranged"
                >
                  <span className="font-medium ms:block hidden">delete</span>
                  <DeleteIcon />
                </button>
    <div  className=" sm:block hidden">
                <FormControlLabel
                  control={<Checkbox style={{ color: "#ea6c0c" }} />}
                  label="Confirmation"
                 
                />
                </div>
                   <div className=" xl:hidden flex flex-col py-1  justify-between items-center">
                  <button
                    onClick={() => incrementQuantity(index)}
                    className="hover:text-oranged font-bold text-[20px] w-[25px] h-[25px] rounded-[2px] bg-gray-200 flex justify-center items-center"
                  >
                    +
                  </button>
                  <button className="text-[20px]">{item.quantity || 1}</button>
                  <button
                    onClick={() => decrementQuantity(index)}
                    className="hover:text-oranged font-bold text-[20px]   w-[25px] h-[25px] rounded-[2px] bg-gray-200 flex justify-center items-center"
                  >
                    -
                  </button>
                </div>
              </div>
           
              <hr className="w-full h-[2px] bg-gray-200" />
            </div>
              
          ))
        ) : (
          <div className={`  ${cart.length > 0 && "hidden"} `}>
            <h1 className=" sm:block hidden md:my-[30px] my-[50px] md:mx-[50px] md:text-[34px] sm:text-[20px] text-[18px] font-roboto font-bold">
              Shopping cart
            </h1>
           
            <div className="flex flex-col items-center justify-center gap-y-6 font-roboto">
              <img src={cartImg} className="m-auto mt-[70px] md:mt-[-40px] w-[150px] md:w-[200px]" alt="Cart Empty" />
              <h1 className="font-bold text-center  md:text-[20px] text-[18px]">
                Your shopping cart is empty.
              </h1>
              <p className="md:text-[20px] text-center text-[15px]">
                Add products to your cart and order on shoppo to stay
              </p>
              <button className="w-[280px] text-[20px] font-roboto capitalize text-white rounded-[20px] bg-oranged h-[50px]">
                start sourcing
              </button>
            </div>
          </div>
        )}
      </div>
      
    
     <Footer/>

    </div>
    </>
   
  );
}
