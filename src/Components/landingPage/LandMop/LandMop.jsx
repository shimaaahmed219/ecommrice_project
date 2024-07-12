import Route from "./Route";
import Nav from "./Nav";
import Business from "./Business";
import Arrivals from "./Arrivals";
import TopRanking from "./TopRanking";
import Footer from "./Footer";
import ForYou from "./ForYou";

export default function LandMop() {
  return (
    <div className="w-full sm:hidden block min-h-screen bg-bgMob">
      <Nav/>
      <hr className="mt-[47px]"/>
      <Route/>
      <Business/>
      <Arrivals/>
      <TopRanking/>
       <Footer/>
       <ForYou/>
    </div>
  )
}
