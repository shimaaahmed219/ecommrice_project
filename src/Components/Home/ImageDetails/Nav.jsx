
import { SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
// import eg from "../../image/bag/eg.svg";
import eg from "../.../../../../../image/bag/eg.svg";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
// import Actions from "./Actions";
import Actions from "../../Actions"
export default function Nav() {
  return (
    <div className="w-full  flex-col border-b-[2px] border-gray-200 flex ">
    <div className="flex justify-around items-center ml-20 ">
      <div>
        {/* logo */}
        <h1 className="font-birthstone  hover:px-5 ml-[-80px] text-oranged  xl:text-[50px] text-[30px]">
          shopingoo
        </h1>
      </div>
      {/* search input */}

      <div className="  p-[2px] border-[1px]  rounded-[20px]  h-[50px] flex justify-between items-center w-[500px]">
        {/* select Categories */}
        <select className="  outline-none px-2 mr-2 border-r-[1px] border-black">
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
        <button className="w-[120px] text-white   h-full rounded-[20px] bg-oranged">
          <SearchOutlined className=" right-2 top-2" />
          search
        </button>
      </div>
      {/*  */}

      <div>
      <ul className="flex justify-between gap-x-6 my-5 font-thin text-[16px] items-center">
        <li className="w-[80px]">
          deliver to:{" "}
          <span className="text-[18px] font-extralight">
            <img src={eg} width={20} className="inline-block" />
            EG
          </span>
        </li>
        <li>
          <LanguageIcon />
          English_USD
        </li>
        <li>
          <Link to="/login">
            <PersonIcon />
            sign in
          </Link>
        </li>
        <li>
          <Link to="/login" className="w-[120px] h-[45px] flex justify-center font-bold font-crimson items-center  rounded-[20px] text-white bg-oranged">
            sign up
          </Link>
        </li>
      </ul>
      </div>
    </div>
    <div className="mt-[-25px]">
    <Actions/>
    </div>
   
  </div>
  )
}
