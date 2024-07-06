import { Link } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useState } from "react";
import AllCategory from "./AllCategory";

export default function LandHover() {
  const [isHovered, setIsHovered] = useState(false);
const [showItems,setShowItems] = useState(false)
console.log(showItems)
  return (
    
    <>
      <div
        // onMouseOver={() => setIsHovered(true)}
       
        className="flex justify-between md:text-[15px] text-[12px] capitalize  text-white"
      >
        <ul className="flex justify-between font-bold  gap-x-5 items-center font-roboto ">
          <li className=" flex ">
            <Link
              to="/"
              onMouseOver={() => setIsHovered(true)}
              // onMouseOut={() => setIsHovered(false)}
            >
              {" "}
              <FormatListBulletedIcon className="mt-[-3px]" />
              All categories
            </Link>
          </li>
          <li>
            <Link
              t0=""
              onMouseOver={() => setShowItems(true)}
              // onMouseOut={() => setIsHovered(false)}
            >
              Featured selections
            </Link>{" "}
          </li>
          <li>
            <Link
              onMouseOver={() => setIsHovered(true)}
              // onMouseOut={() => setIsHovered(false)}
              to=""
            >
              Trade Assurance
            </Link>
          </li>
          <li>
            <Link
              onMouseOver={() => setIsHovered(true)}
              // onMouseOut={() => setIsHovered(false)}
              to=""
            >
              shopo Membership
            </Link>
          </li>
        </ul>
        <ul className="flex justify-between gap-x-5 items-center px-10 font-roboto">
          <li>
            <Link>Buyer Central</Link>
          </li>
          <li>
            <Link>Help Center</Link>
          </li>
          <li>
            <Link>Get the app</Link>
          </li>
          <li>
            <Link>Become a supplier</Link>
          </li>
        </ul>
      </div>
      <div
        className={`left-0 h-[430px] border-none bg-white z-50   absolute top-0 w-full mx-0 ${
          isHovered ? "block" : "hidden"
        }`}
      >
        
        <AllCategory setIsHovered={setIsHovered} />
      </div>
    </>
  );
}
