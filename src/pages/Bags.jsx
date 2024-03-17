import BagPage from "../Components/BagPage";
import Navbar from "../Components/Navbar";
import Saidebar from "../Components/Saidebar";
import Seal from "../Components/Seal";

export default function Bags() {
  return (
    <div className="w-full min-h-screen bg-bg">
      <Navbar/>
<div className="flex">
<Saidebar/>
<div className="w-[81%] h-full mt-10 mx-5">
 <Seal/>
 <BagPage/>
</div>


</div>

    </div>
  )
}
