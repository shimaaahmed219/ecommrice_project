/* eslint-disable react/prop-types */
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

import OrderSaidebar from "./OrderSaidebar";
import { FormControlLabel, Checkbox } from "@mui/material";
import {  useState } from "react";

export default function MyCart({ cart, setCart }) {
  // const [loading,setLoading] =useState(false)
const [checked,setChecked]= useState(false)
  // total price
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // const updateShoppingCart = (updat) => {
  //   setLoading(true);
  //   axios
  //     .put(`http://localhost:3000/Cart`, updat)
  //     .then((response) => {
  //       setCart(updat);
  //       setLoading(false);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error('Error updating cart:', error);
  //       setLoading(false);
  //     });
  // };

  // incrementCount
  const incrementCount = (id) => {
    const updateCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updateCart);
  };
  const decrementCount = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const DeleteItem = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`).then(() => {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    });
  };
  console.log(cart);
  const handleCheck = (id) => {
    setChecked((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));
    confermOrder(id); // تأكيد المنتج عند تحديد الـ checkbox
  };
  const confermOrder = (id) => {
    const selectedItem = cart.find((item) => item.id === id);
    axios
      .post('http://localhost:3000/orders', selectedItem)
      .then((response) => console.log(response));
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      console.log('Order confirmed:');
    }
    
console.log(checked);
  return (
    <div className={`${cart.length <= 0 && "hidden"} w-full max-h-[600px] `}>
      <div className="flex">
        <OrderSaidebar />
        <div className="w-[70%] my-10  ms-auto mr-[80px] max-h-[600px] border-[2px] bg-white ">
          <div className="flex justify-between my-5 px-10  ">
            <h3 className="font-roboto capitalize text-[20px] font-bold ">
              select all
            </h3>
            <h3 className="font-roboto text-[20px] capitalize font-bold">
              total:{totalPrice}{" "}
              <span className=" uppercase text-oranged">egp</span>
            </h3>
          </div>
          <hr className="w-full h-[2px] mt-5 bg-gray-200" />
          <div className=" min-h-[100px] max-h-[420px] overflow-auto">
            {cart.map((item) => (
              <div key={item.id} className="">
                <div className="flex justify-between items-center pr-5">
                  <img className="w-[100px] h-[100px]" src={item.image} />
                  <h1 className="font-roboto font-bold capitalize">
                    {item.title.substring(0, 20)}
                  </h1>
                  <h1 className="font-roboto font-bold">
                    {item.price}{" "}
                    <span className="uppercase text-oranged ">egp</span>
                  </h1>
                  <div className="flex justify-between items-center w-[100px]">
                    <button
                      onClick={() => incrementCount(item.id)}
                      className=" hover:text-oranged font-bold text-[20px] w-[30px] h-[30px] rounded-full bg-gray-200 flex justify-center items-center"
                    >
                      +
                    </button>
                    <button>{item.quantity}</button>
                    <button
                      onClick={() => decrementCount(item.id)}
                      className="  hover:text-oranged font-bold text-[20px] w-[30px] h-[30px] rounded-full bg-gray-200 flex justify-center items-center"
                    >
                      -
                    </button>
                  </div>
                  <h1 className="font-roboto font-bold">
                    {item.price * item.quantity}
                    <span className="uppercase text-oranged ">egp</span>
                  </h1>
                  <button
                    onClick={() => DeleteItem(item.id)}
                    className="text-oranged"
                  >
                    <span className="font-medum">delete</span>
                    <DeleteIcon />
                  </button>
               

                  <FormControlLabel
                 checked={checked[item.id] || false}
                 onChange={() => handleCheck(item.id)}
                  
                    control={<Checkbox style={{ color: "#ea6c0c" }} />}
                    label="Confirmation"
                  />
                
                </div>
                <hr className="w-full h-[2px] bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
