import {
  NotificationsNone,
  ShoppingCart,
  SearchOutlined,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="w-full h-70px flex justify-around items-center py-5 m-auto">
      {/*  */}
      <div className="flex justify-around w-4/6">
        <h1 className="font-birthstone hover:px-5 ml-[-80px] text-red-400 xl:text-[50px] text-[30px]">
          shopingoo
        </h1>

        <nav className=" w-3/6 py-6 xl:text-[20px]   text-[18px] capitalize text-gray-800 lg:block hidden">
          <ul className="flex flex-row justify-between items-center">
            <li
              className={`relative ${
                location.pathname === "/" ? "border-b-2 border-red-400" : ""
              }`}
            >
              {" "}
              <Link to="/" className="hover:text-red-400">
                home
              </Link>
            </li>

            <li
              className={`relative ${
                location.pathname === "/about"
                  ? "border-b-2 border-red-400"
                  : ""
              }`}
            >
              {" "}
              <Link to="/about" className="hover:text-red-400">
                about
              </Link>
            </li>

            <li
              className={`relative ${
                location.pathname === "/content"
                  ? "border-b-2 border-red-400"
                  : ""
              }`}
            >
              {" "}
              <Link to="/content" className="hover:text-red-400">
                contact
              </Link>
            </li>

            <li
              className={`relative ${
                location.pathname === "/sign" ? "border-b-2 border-red-400" : ""
              }`}
            >
              {" "}
              <Link to="/sign" className="hover:text-red-400">
                sign up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/*  */}

      <div className="flex justify-around gap-5 ">
        <div className="relative">
          <input
            type="search"
            className=" p-2 bg-gray-50 border-none focus:outline-none rounded-[25px] "
            placeholder="search"
          />
          <SearchOutlined className="absolute right-2 top-2" />
        </div>

        <Link to="/cart" className="p-2 bg-gray-600">
          <ShoppingCart className="text-red-400" />
        </Link>

        <Link className="p-2 bg-gray-600">
          <NotificationsNone className="text-red-400" />
        </Link>
      </div>
    </div>
  );
}
