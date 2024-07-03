import axios from "axios";
import { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  const [data, setData] = useState([]);
  const discounte = 0.1;
  const getDescounte = (price) => {
    return price - price * discounte;
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3000/arrivals`)
      .then((res) => setData(res.data));
    console.log(" arr", data);
  }, []);
  return (
    <div className="w-[90%] m-auto ">
      <div className="flex justify-between  my-10">
        <h1 className="  text-[28px] font-inter font-bold"> New arrivals</h1>
        <Link
          to="/home"
          className="font-inter flex items-center font-[500px] text-[20px] capitalize underline"
        >
          view more <GrFormNextLink />
        </Link>
      </div>

      <div className="flex justify-between bg-bb p-6 rounded-[10px]">
        {data.map((item) => (
          <div key={item.id}>
          <Link to="/home">
          <img
              src={item.image}
              className="rounded-[10px] h-[250px] mb-3 hover:scale-[1.1] w-[200px]"
            />
          </Link>
       
           <span className="font-bold" >${item.price}  -    ${getDescounte(item.price).toFixed(2)}</span>
     
       
            <p className="text-gray-500">Min. order: 1 </p>
          </div>
        ))}
      </div>
    </div>
  );
}
