import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import { Link, useLocation } from "react-router-dom";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TocIcon from "@mui/icons-material/Toc";
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const list = [
  { id: 1, name: "home", icon: <HomeIcon />, href: "/home", to: "/ordersHome" },
  {
    id: 2,
    name: "message",
    icon: <MessageIcon />,
    href: "/message",
    to: "message",
  },
  { id: 3, name: "cart ", icon: <ShoppingCartIcon />, href: "/cart", to: "/cart" },
  {
    id: 4,
    name: "orders",
    icon: <PriceChangeIcon />,
    href: "/orders",
    to: "/orders",
  },
  { id: 5, name: "my lists", icon: <TocIcon />, href: "/list", to: "/list" },
  {
    id: 6,
    name: "contacts",
    icon: <SupervisorAccountIcon />,
    href: "contact",
    to: "/contact",
  },
];

export default function OrderSaidebar() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const handleItemClick = (to) => {
    setActivePage(to);
  };
  return (
    <div className="w-[230px] min-h-full flex bg-so  ">
      <div className="w-[80px] fexid  h-[500px] bg-saidOrder">
        <ul>
          {list.map((item) => (
            <li
              className={`${
                activePage === item.to
                  ? "bg-so mx-0 border-l-4 border-l-oranged w-full"
                  : ""
              }`}
              key={item.id}
              onClick={() => handleItemClick(item.to)}
            >
              <Link
                className="flex flex-col my-5 mx-2 py-2 items-center text-cnter text-white"
                to={item.href}
              >
                {" "}
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
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
