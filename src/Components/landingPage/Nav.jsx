import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import eg from "../../../image/bag/eg.svg";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LandHover from "./LandHover";

export default function Nav() {
  return (
    <div className="w-full absolute top-0  flex-col shadow-xl flex px-10 bg-transparent">
      <div className="flex justify-between items-center ml-20  ">
        <div>
          {/* logo */}
          <h1 className=" font-allura  hover:px-5 ml-[-80px] text-white  xl:text-[50px] text-[30px]">
            shopingoo.com
          </h1>
        </div>
        {/* search input */}

        {/*  */}

        <div>
          <ul className="flex justify-between font-semibold text-[15px] text-white gap-x-6 my-5  items-center">
            <li className="w-[80px]">
              deliver to:{" "}
              <span className="text-[18px] font-extralight">
                <img src={eg} width={20} className="inline-block" />
                EG
              </span>
            </li>
            <li className="">
              <LanguageIcon />
              English_USD
            </li>

            <li>
              <Link>
                <ShoppingCartIcon />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <PersonIcon />
                sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <LandHover />
    </div>
  );
}
