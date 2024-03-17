import axios from "axios";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
export default function HomeCategory() {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3000/all`).then((data) => setAllProduct(data.data));
  }, []);
  console.log(allProduct);
  return (
    <div className="py-10 w-[80%]">
      <div className="grid-cols-4 grid gap-x-5 px-3">
        {allProduct.map((item, index) => (
          <div key={item.id}>
            <img src={item.image} className="h-[250px] w-[250px] " />
            <h6 className="font-light font-roboto mt-3  text-[15px]">
              {item.title.substring(0,30)}
            </h6>
            <h6 className="font-bold">
              EGP{item.price}{" "}
              <span className="font-gray-300 text-[15px] font-light">
                /price
              </span>
            </h6>
            <h6 className="font-light">
              1 price{" "}
              <span className="font-gray-200 text-[15px] font-light">
                min order
              </span>
            </h6>
            <div>
              4.5
              <StarIcon className="text-oranged" />
              <span>({index + 4})</span>{" "}
              <span className="ml-4 text-gray-500">{"great service"}</span>
            </div>
            
           <div className="flex justify-between items-center">
           <button className="bg-oranged text-white w-[100px] h-[40px] rounded-[25px] my-5">buy new</button>
            <MapsUgcIcon className="text-blue-500"/>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
}
