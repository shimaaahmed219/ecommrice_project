
import Nav from "../Components/landingPage/Nav";
import Search from "../Components/landingPage/Search";
import Route from "../Components/landingPage/Route";
import Products from "../Components/landingPage/Products";
import NavbarPosition from "../Components/landingPage/NavbarPosition";
import Quoition from "../Components/landingPage/Quoition";
import FooterEnd from "../Components/landingPage/FooterEnd";
import SectionOne from "../Components/Manufacturers.jsx/SectionOne";

export default function Manufacturers() {
  return (
    <div className="w-full min-h-screen pb-2 bg-bg ">

      <NavbarPosition/>
      <img
        className="h-[420px]"
        src="https://s.alicdn.com/@img/imgextra/i2/O1CN01WhUxZ7288l4TC07G0_!!6000000007888-0-tps-1920-400.jpg"
      />
      <Nav />
      <Route/>
      <Search />
      <div className="md:block hidden">
      <Products />
      </div>
      <div className="my-5 border-b-[1px] border-gray-300">
      <Quoition/>
      </div>
<SectionOne/>
      <FooterEnd/>
     
    </div>
  );
}
