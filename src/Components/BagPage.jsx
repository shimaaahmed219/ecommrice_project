
import axios from "axios";
import { useEffect, useState } from "react";

export default function BagPage() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/bags`)
      .then((data) => setProduct(data.data));
  }, []);

  console.log(product);
  return (
    <div className="w-full h-full mt-[100px]">
      {product.map((item) => (
        <div key={item.id} className="flex bg-white my-5 mx-10">
          <img src={item.image} className="w-[250px] h-[250px]" />
          <div className="w-[500px] ml-10 font-roboto py-5">
            <h3>{item.title}</h3>
            <h3 className="font-bold text-[35px] ">{item.price} EGP</h3>
            <h3 className="mb-3">15 orders</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <div className="w-[260px]   flex flex-col items-center">
            <button className="border-2 mt-[50px] bg-oranged text-white font-roboto my-3 text-[20px] rounded-[20px] w-[180px] h-[50px]">
              chat new
            </button>
            <h1>Compare</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
