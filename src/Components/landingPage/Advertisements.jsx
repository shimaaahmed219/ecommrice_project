// http://localhost:3000/advertisements

import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

import Slider from "react-slick";
export default function Advertisements() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/advertisements")
      .then((data) => setItem(data.data))

      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  console.log(item);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className=" my-20 font-roboto m-auto w-[90%]">
      <Slider {...settings}>
        {item.map((item) => (
          <div key={item.id} className="">
            <div className="">
              <img
                src={item.image}
                className=" rounded-[20px] w-full h-[300px]"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
