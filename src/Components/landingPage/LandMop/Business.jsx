import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { BiCategoryAlt } from "react-icons/bi";
import { RiCompass2Line } from "react-icons/ri";
import { RiShip2Line } from "react-icons/ri";
import { TbWorldCancel } from "react-icons/tb";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Business() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rectangles = [
    {
      id: 1,
      color: "bg-oranged",
      name: "All categories",
      icon: <BiCategoryAlt />,
      href:"/allCategory"
    },
    {
      id: 2,
      color: "bg-bluee",
      name: "Request for Quotation",
      icon: <RiCompass2Line />,
      href:"/"
    },
    {
      id: 3,
      color: "bg-greenn",
      name: "Logistics services",
      icon: <RiShip2Line />,
      href:"/"
    },
    {
      id: 4,
      color: "bg-tt",
      name: "worldwide selection",
      icon: <TbWorldCancel />,
    },
  ];
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % rectangles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + rectangles.length) % rectangles.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
   <>
     <div className="flex my-5 justify-between px-3">
        <h1 className=" capitalize font-semibold text-[18px] font-inter">
         for your business
        </h1>
        <GrFormNextLink />
      </div>

    <div
      {...swipeHandlers}
      className="flex  overflow-hidden items-center justify-between  my-5 bg-gray-100"
    >
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {rectangles.map((rectangle) => (
        
              <div
            key={rectangle.id}
            className={`w-[30%] mx-1 flex-shrink-0 rounded-[10px] items-center h-[60px] ${rectangle.color}`}
          >
            <div className="text-white">
             <Link className=" text-center  px-2 w-full flex items-center h-[60px] justify-between" to={rectangle.href}>
             <div className="w-[70%] font-bold text-[12px] font-inter">
                {rectangle.name}
              </div>{" "}
              <div className="text-[25px] text-gray-300">{rectangle.icon}</div>
             </Link>
              {" "}
           
            </div>
          </div>
        
        
        ))}
      </div>
    </div>
   </>
  );
}
