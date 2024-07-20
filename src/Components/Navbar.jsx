import { ShoppingCart, SearchOutlined } from "@mui/icons-material";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PersonIcon from "@mui/icons-material/Person";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ChatIcon from "@mui/icons-material/Chat";
import { Link } from "react-router-dom";
import Actions from "./Actions";

export default function Navbar() {
  return (
    <div className="w-full  flex-col shadow-xl flex bg-bg ">
      <div className="flex justify-around items-center ml-20 ">
        <div>
          {/* logo */}
          <h1 className="font-birthstone  hover:px-5 ml-[-80px] text-oranged  xl:text-[50px] text-[30px]">
            shopingoo
          </h1>
        </div>
        {/* search input */}

        <div className=" mt-5 p-[2px] border-[1px]  rounded-[20px]  hidden h-[50px] md:flex justify-between items-center w-[300px] lg:w-[500px]">
          {/* select Categories */}
          <select className="  bg-bg outline-none px-2 mr-2 border-r-[1px] border-black">
            <option value="saab">Saab</option>
            <option value="vw">VW</option>
            <option value="audi" selected>
              products
            </option>
          </select>
          {/* input */}
          <input
            placeholder="weomen's shoes"
            type="search"
            className=" p-2 w-[70%] bg-transparent h-[90%] border-none focus:outline-none  "
          />

          <CameraAltIcon className="text-gray-700 mx-3 hover:text-oranged" />
          {/* search button */}
          <button className="w-[120px] text-white  rounded-[10px]  h-full xl:rounded-[20px] bg-oranged">
            <SearchOutlined className=" right-2 top-2" />
            <span className="lg:inline hidden">search</span>
          </button>
        </div>
        <div className="flex justify-between gap-x-7">
          <Link className="flex flex-col items-center" to="">
            {" "}
            <PersonIcon />
            <span> my profile</span>
          </Link>

          <Link className="flex flex-col items-center" to="">
            <ChatIcon />
            <span>messages</span>
          </Link>

          <Link className="flex flex-col items-center" to="/orders">
            {" "}
            <LocalAtmIcon />
            <span>orders</span>
          </Link>

          <Link className="flex flex-col items-center" to="/cart">
            <ShoppingCart />
            <span>cart</span>
          </Link>
        </div>
      </div>
      <div>
        <Actions />
      </div>
    </div>
  );
}
