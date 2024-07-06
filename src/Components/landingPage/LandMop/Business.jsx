import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { BiCategoryAlt } from "react-icons/bi";
import { RiCompass2Line } from "react-icons/ri";
import { RiShip2Line } from "react-icons/ri";
import { TbWorldCancel } from "react-icons/tb";
export default function Business() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rectangles = [
    {
      id: 1,
      color: "bg-oranged",
      name: "All categories",
      icon: <BiCategoryAlt />,
    },
    {
      id: 2,
      color: "bg-bluee",
      name: "Request for Quotation",
      icon: <RiCompass2Line />,
    },
    {
      id: 3,
      color: "bg-greenn",
      name: "Logistics services",
      icon: <RiShip2Line />,
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
    <div
      {...swipeHandlers}
      className="flex  overflow-hidden items-center justify-between mx-5 my-5 bg-gray-100"
    >
      <div
        className="flex px-3 transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {rectangles.map((rectangle) => (
          <div
            key={rectangle.id}
            className={`w-[30%] mx-2 flex-shrink-0 rounded-[10px] items-center h-[70px] ${rectangle.color}`}
          >
            <div className="text-white text-center  px-2 flex items-center h-[70px] justify-between">
              {" "}
            <div className="w-[60%] text-[13px] font-inter">{rectangle.name}</div> <div className="text-[40px] text-gray-300">{rectangle.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
