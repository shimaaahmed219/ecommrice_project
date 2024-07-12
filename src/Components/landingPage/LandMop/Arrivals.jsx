import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { GrFormNextLink } from "react-icons/gr";
export default function Arrivals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: "1",
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "bags",
      image:
        "data:image/jpeg;base64,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",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: "2",
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "shoes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TB3ZitE88afO-9t1cR6zr7uxr3IDtgrnbw&usqp=CAU",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: "3",
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "women's blouse",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeiZDCHNEAKM07OHOTW_opCv5_XwR8QZmjA&usqp=CAU",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: "4",
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "bags",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzx-0hfadyiJlHTs_AF_HEifheEuxwb95YCjnIk8H6Fc09-QHGd4yNJjIjkYR3wT1FpU&usqp=CAU",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: "5",
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's blouse",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-hoJvFGbTzOiz9qgnlzi-ir9Zn5zW_V_5CqS8yRGGgQno1xqZ2SaeflspPfL4f54d8g&usqp=CAU",
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
  ];
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });
  return (
    <>
      <div className="flex justify-between px-3">
        <h1 className=" font-semibold text-[18px] font-inter">
          New arrivals
        </h1>
        <GrFormNextLink />
      </div>

      <div
        {...swipeHandlers}
        className="flex  overflow-hidden items-center justify-between  my-5"
      >
        <div
          className="flex  transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className={`w-[30%]  flex-shrink-0 rounded-[10px] items-center h-[290px] `}
            >
              <div className="  px-2 font-semibold   h-[60px] ">
                <div className="text-[20px] text-gray-300">
                  <img className="w-full h-[160px]" src={item.image} />
                </div>
                <div className="mt-2">EGP{item.price}-</div>
                <div>EGP{item.price}</div>
                <p className="text-gray-600 text-[15px] font-thin capitalize">
                  moq : 1 price
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
