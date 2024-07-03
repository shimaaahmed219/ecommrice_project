import Nav from "../Components/landingPage/Nav";
import Search from "../Components/landingPage/Search";
import Route from "../Components/landingPage/Route";
import Products from "../Components/landingPage/Products";
import Quoition from "../Components/landingPage/Quoition";
import Advertisements from "../Components/landingPage/Advertisements";
import Guaranteed from "../Components/landingPage/Guaranteed";
import Over from "../Components/landingPage/Over";
import SelectedCategory from "../Components/landingPage/SelectedCategory";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import NewArrivals from "../Components/landingPage/NewArrivals";
import Suppiers from "../Components/landingPage/Suppiers";
import NavbarPosition from "../Components/landingPage/NavbarPosition";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen ">
      <NavbarPosition/>
      <img
        className="h-[420px]"
        src="https://s.alicdn.com/@img/imgextra/i2/O1CN01WhUxZ7288l4TC07G0_!!6000000007888-0-tps-1920-400.jpg"
      />
      <Nav />
      <Route />
      <Search />
      <Products />
    <Quoition/>

      <Advertisements />
     
      <div className="flex justify-between mt-[-30px] mb-4 w-[90%] m-auto">
        <h1 className="  text-[28px] font-inter font-bold">
          Savings spotlight
        </h1>
        <Link
          to="/home"
          className="font-inter flex items-center font-[500px] text-[20px] capitalize underline"
        >
          view more <GrFormNextLink />
        </Link>
      </div>

      <Guaranteed />
      <Over />
      <SelectedCategory />
      <NewArrivals/>
      <Suppiers/>
    </div>
  );
}
