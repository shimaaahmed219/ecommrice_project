import Route from "../../landingPage/LandMop//Route";
import Nav from "../../landingPage/LandMop/Nav";
import Business from "../../landingPage/LandMop/Business";
import Arrivals from "../../landingPage/LandMop/Arrivals";
import TopRanking from "../../landingPage/LandMop/TopRanking";
import Footer from "../../landingPage/LandMop/Footer";
import ForYou from "../../landingPage/LandMop/ForYou";

export default function Header() {
  return (
    <div className="w-full sm:hidden block min-h-screen bg-bgMob">
    <Nav/>
    <hr className="mt-[47px]"/>
    <Route/>
    <Business/>
    <TopRanking/>
    
    <ForYou/>
     <Footer/>
     <Arrivals/>
    
  </div>
  )
}
