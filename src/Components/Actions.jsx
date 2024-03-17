import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Link } from "react-router-dom";

export default function Actions() {
  return (
    <div className="flex justify-between py-5">
      <ul className="flex  justify-between gap-x-5 items-center font-roboto px-10">
        <li className=" flex ">
          <Link to="/">
            {" "}
            <FormatListBulletedIcon className="mt-[-3px]"/>
            All categories
          </Link>
        </li>
        <li>
          <Link t0="">Featured selections</Link>{" "}
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
  );
}
