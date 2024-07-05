// http://localhost:3000/advertisements

// import axios from "axios";/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useEffect, useState } from "react";

import Slider from "react-slick";
export default function Advertisements() {
  const item=[
    {
      "id": "1",
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "bags",
      "image": "https://img.freepik.com/free-psd/fashion-template-design_23-2150119502.jpg?uid=R154202454&ga=GA1.1.2082633129.1700516097&semt=ais_user"
    },
    {
      "id": "2",
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "bags",
      "image": "https://img.freepik.com/free-psd/women-s-fashion-facebook-template_23-2150836809.jpg?uid=R154202454&ga=GA1.1.2082633129.1700516097&semt=ais_user"
    },
    {
      "id": "3",
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "bags",
      "image": "https://img.freepik.com/free-vector/fashion-sale-landing-page_23-2148588651.jpg?uid=R154202454&ga=GA1.1.2082633129.1700516097&semt=ais_user",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": "4",
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "bags",
      "image": "https://img.freepik.com/free-vector/promotion-fashion-banner_1188-143.jpg?uid=R154202454&ga=GA1.1.2082633129.1700516097&semt=ais_user",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": "5",
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "bags",
      "image": "https://img.freepik.com/free-photo/discount-ice-skates_23-2150165478.jpg?uid=R154202454&ga=GA1.1.2082633129.1700516097&semt=ais_user",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": "6",
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "bags",
      "image": "https://img.freepik.com/free-vector/woman-liquid-effect-leaves-landing-page-fashion-sale_23-2148595182.jpg?uid=R154202454&ga=GA1.1.2082633129.1700516097&semt=ais_user",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    }
  ]
  

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/advertisements")
  //     .then((data) => setItem(data.data))

  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     });
  // }, []);
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
