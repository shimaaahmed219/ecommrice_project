// import Route from "../../landingPage/LandMop/Route";
import Nav from "../../landingPage/LandMop/Nav";
import Business from "../../landingPage/LandMop/Business";
import Arrivals from "../../landingPage/LandMop/Arrivals";
import TopRanking from "../../landingPage/LandMop/TopRanking";
import Footer from "./Footer";
import ForYou from "../../landingPage/LandMop/ForYou";

export default function HomeMop() {
  return (
    <div className="w-full sm:hidden block min-h-screen bg-bgMob">
    <Nav/>
    <hr className="mt-[47px]"/>
    {/* <Route/> */}
    <Business/>
    <Arrivals/>
    <TopRanking/>
     <Footer/>
     <ForYou/>
  </div>
  )
}
