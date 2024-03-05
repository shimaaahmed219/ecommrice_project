import Navbar from "../Components/Navbar";
import img from '../../image/bag/photo-young-brunette-woman-sunglasses-holding-shopping-bags-high-quality-photo_114579-91835.jpg'
import Catogery from "../Components/Catogery";



function Home() {
  
  return (
    <div className="w-[90%] m-auto h-full">
      <Navbar />
      <div className="w-full flex justify-between ">
     <Catogery/>
      <img src={img} className=""/>
      </div>
{/*  */}
<div>

</div>
    </div>
  );
}

export default Home;
