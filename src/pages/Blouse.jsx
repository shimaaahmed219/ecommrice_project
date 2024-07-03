import BlousePage from "../Components/BlousePage";
import Navbar from "../Components/Navbar";
import Saidebar from "../Components/Saidebar";


export default function Blouse() {
  return (

    <div className="w-full h-full">
        <Navbar/>
<div className="flex  bg-bb">
<Saidebar/>
<BlousePage/>
</div>
    </div>
  )
}
