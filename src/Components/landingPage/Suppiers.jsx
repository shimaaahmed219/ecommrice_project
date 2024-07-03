import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { useEffect, useState } from "react";
import axios from "axios";
import FooterEnd from "./FooterEnd";

export default function Suppiers() {
  const [flag, setflag] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/flags`).then((res) => setflag(res.data));
  });
  return (
    <div className="m-auto w-full bg-bg h-full pt-10 py-2 mt-10">
      <div className="flex justify-between w-[90%] m-auto my-10">
        <h1 className="  text-[28px] font-inter font-bold">
          Find suppliers by country or region
        </h1>
        <Link
          to="/home"
          className="font-inter flex items-center font-[500px] text-[20px] capitalize underline"
        >
          view more <GrFormNextLink />
        </Link>
      </div>
      <div className="flex w-[90%] m-auto justify-between">
        {flag.map((item) => (
          <div key={item.id}>
            <img src={item.images} className="w-[70px] h-[70px]" />
          </div>
        ))}
      </div>
 
    <FooterEnd/>
    </div>
  );
}
