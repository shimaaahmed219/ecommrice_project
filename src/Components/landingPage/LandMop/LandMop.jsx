import Route from "./Route";
import Nav from "./Nav";
import Business from "./Business";



export default function LandMop() {
  return (
    <div className="w-full min-h-screen bg-bgMob">
      <Nav/>
      <hr/>
      <Route/>
      <Business/>
       
    </div>
  )
}
