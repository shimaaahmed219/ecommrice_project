import Route from "./Route";
import Nav from "./Nav";
import Business from "./Business";
import Arrivals from "./Arrivals";
import TopRanking from "./TopRanking";


export default function LandMop() {
  return (
    <div className="w-full sm:hidden block min-h-screen bg-bgMob">
      <Nav/>
      <hr/>
      <Route/>
      <Business/>
      <Arrivals/>
      <TopRanking/>
       
    </div>
  )
}
