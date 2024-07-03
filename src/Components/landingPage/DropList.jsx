import { Link } from "react-router-dom";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useState } from "react";
import Items from "./DropListItems/Items";

// import Items from "./Items";
// import { useState } from "react";

export default function DropList() {
  const [isHovered, setIsHovered] = useState(false);
console.log(setIsHovered);
  return (
    <>
      <div
       
        className={` flex justify-between w-full  absolute top-[90px] px-9 text-[15px] capitalize `}
      >
        <ul className="flex  justify-between gap-x-5 items-center font-roboto ">
          <li className=" flex ">
            <Link
              to="/"
              
            >
              {" "}
              <FormatListBulletedIcon className="mt-[-3px]" />
              All categories
            </Link>
          </li>
          <li>
            <Link
              // onMouseOver={() => setIsHovered(true)}
              // onMouseOut={() => setIsHovered(false)}
              to=""
            >
              Featured selections
            </Link>{" "}
          </li>
          <li>
            <Link to="">Trade Assurance</Link>
          </li>
          <li>
            <Link to="">shopo Membership</Link>
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
        className={`${
          !isHovered ? "opacity-100" : "opacity-0"
        } w-full text-black absolute top-[130px]`}
      >
        {/* <Items /> */}
       <Items/>
      </div>
    </>
  );
}
