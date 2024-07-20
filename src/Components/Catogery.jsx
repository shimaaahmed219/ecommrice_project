import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Catogery() {
  const [catogiry, setCatogiry] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((res) => setCatogiry(res.data));
  }, []);

  console.log(catogiry);
  return (
    <div className="font-roboto mt-5">
      {catogiry.map((cat) => (
        <div
          key={cat.id}
          className="my-3 font-roboto text-gray-800 capitalize font-light hover:text-oranged"
        >
        <Link to={`/category/${cat}`}>{cat}</Link>
        </div>
      ))}
       <div
       
          className="my-3 font-roboto text-gray-800 capitalize font-light hover:text-oranged"
        >
        <Link to={`/home`}>home</Link>
        </div>

    </div>
  );
}
