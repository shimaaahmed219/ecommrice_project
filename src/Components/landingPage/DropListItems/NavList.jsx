/* eslint-disable react/prop-types */

import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export default function NavList() {
  return (
    <div className="w-[150px] transition pt-3 duration-700 h-[150px] fixed bg-white shadow-md">
      <ul className="flex flex-col gap-y-3">
        <li className="hover:bg-bb cursor-pointer py-1">
          <LanguageIcon />
          English_USD
        </li>
        <li  className="hover:bg-bb cursor-pointer py-1">
          <Link to="/login">
            <PersonIcon />
            sign in
          </Link>
        </li>
        <li  className="hover:bg-bb cursor-pointer py-1">
          <Link to="/login" className="">
            <PersonIcon />
            sign up
          </Link>
        </li>
      </ul>
    </div>
  );
}
