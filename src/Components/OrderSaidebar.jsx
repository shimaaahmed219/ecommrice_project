import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import { Link } from "react-router-dom";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TocIcon from "@mui/icons-material/Toc";
const list = [
  { id: 1, name: "home", icon: <HomeIcon />, href: "/home" },
  { id: 2, name: "message", icon: <MessageIcon />, href: "/message" },
  { id: 3, name: "buying ", icon: <MessageIcon />, href: "" },
  { id: 4, name: "orders", icon: <PriceChangeIcon />, href: "/orders" },
  { id: 5, name: "my lists", icon: <TocIcon />, href: "/list" },
  { id: 6, name: "contacts", icon: <SupervisorAccountIcon />, href: "" },
];

export default function OrderSaidebar() {
  return (
    <div className="w-[230px] h-full flex bg-so">
      <div className="w-[80px] h-[460px] bg-saidOrder [&>*:nth-child(4)]:bg-so  [&>*:nth-child(4)]:w-full  [&>*:nth-child(4)]:mx-0  [&>*:nth-child(4)]:border-l-4  [&>*:nth-child(4)]:border-l-oranged">
        {list.map((item) => (
          <Link
            className="flex flex-col my-5 mx-2 py-2 items-center text-cnter text-white"
            key={item.id}
            to={item.href}
          >
            {" "}
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col text-gray-300">
        <h2 className="text-white font-bold m-3">orders</h2>

        <h6 className="font-light my-3 px-3">all orders</h6>
        <hr className="w-[130px] mx-2" />
        <ul className="flex flex-col gap-y-3 my-4 mx-2 capitalize">
          <li className="hover:text-oranged  text-oranged">
            <Link>all orders</Link>
          </li>
          <li className="hover:text-oranged">
            <Link>reviews</Link>
          </li>
          <li className="hover:text-oranged">
            <Link>mu coupons</Link>
          </li>
          <li className="hover:text-oranged">
            <Link>text information</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
