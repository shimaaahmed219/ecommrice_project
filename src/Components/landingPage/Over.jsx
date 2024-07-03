import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Over() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/rows")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  return (
    <div className="w-[90%] flex min-h-[300px] m-auto gap-x-20 my-10">
      {rows.map((row) => (
        <div
          key={row.id}
          className=" bg-bb font-bold  w-3/6 text-[20px] p-5 rounded-[10px] "
        >
          <h1 className="mb-2">{row.title}</h1>
          <div className="flex justify-between items-center w-6/6 ">
            {row.images.map((image) => (
              <div key={image.id} className="w-6/6 ">
               <Link to="/login">
               <img
                  src={image.url}
                  alt={image.title}
                  className=" hover:scale-[1.1] w-[150px] border-2 h-[170px]"
                />
               </Link>
                <h1 className=" text-litter my-2 tracking-[-1px] capitalize font-bold text-[15px]">
                  {" "}
                  <span className="text-oranged">shoppingoo</span> Guaranteed
                </h1>
                <h3 className="text-[16px]">
                  {image.price}
                  <span className="font-light"> Price for 50 pieces</span>
                </h3>
                <span className="font-light text-[18px]">
                  {" "}
                  min order : 2 pieces
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
