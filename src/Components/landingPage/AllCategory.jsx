/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import eg from "../../../image/bag/eg.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DropList from "./DropList";
// import { useState } from "react";


export default function AllCategory({setIsHovered}) {


  return (
    <div>
      <div onClick={() =>setIsHovered(false)} className="w-full absolute top-0  flex-col  flex px-10 bg-transparent">
        <div onClick={() =>setIsHovered(false)} className="flex justify-between items-center ml-20  ">
          <div>
            {/* logo */}
            <h1 className="font-allura  hover:px-5 ml-[-80px] text-oranged  xl:text-[50px] text-[30px]">
              shopingoo.com
            </h1>
          </div>
          {/* search input */}

          {/*  */}

          <div>
            <ul className="flex justify-between font-semibold text-[15px]  gap-x-6 my-5  items-center">
              <li className="w-[80px]">
                deliver to:{" "}
                <span className="text-[18px] font-extralight">
                  <img src={eg} width={20} className="inline-block" />
                  EG
                </span>
              </li>
              <li className="">
                <LanguageIcon />
                English_USD
              </li>

              <li>
                <Link>
                  <ShoppingCartIcon />
                </Link>
              </li>
              <li>
                <Link>
                  <PersonIcon />
                  sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <DropList />
      <hr className="w-full h-[2px] bg-gray-200 absolute top-[120px]" />
    </div>
  );
}
