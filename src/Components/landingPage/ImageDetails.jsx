import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Nav from "../../Components/Home/ImageDetails/Nav";

export default function ImageDetails() {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  const discount = 0.238;
  const discoun = 0.276;
  const calculateDiscountedPrice = (price) => {
    return price - price * discount;
  };
  const calculateDiscountedPric = (price) => {
    return price - price * discoun;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/categories`)
      .then((response) => {
        const categories = response.data;
        let foundImage = null;
        categories.forEach((category) => {
          const img = category.images.find(
            (image) => image.id.toString() === id
          );
          if (img) {
            foundImage = img;
          }
        });
        setImage(foundImage);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]);

  return (
    <div className=" bg-white min-h-screen">
      <Nav />
      {image ? (
        <div className="w-[93%] m-auto">
          <h2 className="text-[18px] my-5 font-semibold font-inter">
            {image.title}
          </h2>

          <div className="flex my-10 justify-between">
            <div className="flex gap-x-5">
              <div className="flex flex-col gap-y-3">
                <img src={image.url} alt="" className="w-[70px] h-[70px]" />
                <img src={image.url} alt="" className="w-[70px] h-[70px]" />
                <img src={image.url} alt="" className="w-[70px] h-[70px]" />
                <img src={image.url} alt="" className="w-[70px] h-[70px]" />
                <img src={image.url} alt="" className="w-[70px] h-[70px]" />
              </div>
              <img src={image.url} alt="img" className="w-[700px] h-[400px]" />
            </div>

            <div className="w-2/6 shadow-2xl px-5 py-5 rounded-[20px] mt-[-70px]">
              <div className=" flex justify-between">
                <div className="flex flex-col">
                  <span className="text-gray-500 font-inter"> 1-9 pricees</span>
                  <span className="font-bold text-[20px]"> ${image.price}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 font-inter">
                    {" "}
                    10-99 pricees
                  </span>
                  <span className="font-bold text-[20px]">
                    {" "}
                    ${calculateDiscountedPrice(image.price).toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 font-inter">
                    {" "}
                    100-499 pricees
                  </span>
                  <span className="font-bold text-[20px]">
                    {" "}
                    ${calculateDiscountedPric(image.price).toFixed(2)}
                  </span>
                </div>
              </div>
              <hr className="my-3" />
              <div className="py-5 font-inter">
                <h1 className="font-semibold my-1  text-[20px]">Variations</h1>
                <p>Total options: 62 Color;7 Size.</p>

                <h3 className="mt-7">1. Color(62): 01</h3>
                <div className="flex gap-x-3 mt-1">
                  <img src={image.url} alt="" className="w-[70px] h-[70px]" />
                  <img src={image.url} alt="" className="w-[70px] h-[70px]" />
                  <img src={image.url} alt="" className="w-[70px] h-[70px]" />
                  <img src={image.url} alt="" className="w-[70px] h-[70px]" />
                  <img src={image.url} alt="" className="w-[70px] h-[70px]" />
                </div>
              </div>
              <div className="flex justify-around my-7">
                <button className="w-[150px] h-[50px] bg-oranged text-white flex justify-center items-center rounded-[50px]">
                  {" "}
                  start order
                </button>
                <button className="border-[2px] w-[150px] h-[50px] border-black rounded-[50px]">
                  {" "}
                  add to card
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
