

import Navbar from "../Components/Navbar";
import Saidebar from "../Components/Saidebar";
import Seal from "../Components/Seal";
import ShoesPage from "../Components/shoes/ShoesPage";
export default function Shoes() {
  return (
    <div className="w-full min-h-screen bg-bg">
    <Navbar/>
<div className="flex">
<Saidebar/>
<div className="w-[81%] h-full mt-10 mx-5">
<Seal/>
<ShoesPage/>
</div>


</div>

  </div>

  )
}
