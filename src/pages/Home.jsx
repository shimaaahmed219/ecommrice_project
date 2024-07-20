import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import HomeMop from "../Components/Home/Hommop/HomeMop";
import Navbar from "../Components/Navbar";
import Saidebar from "../Components/Saidebar";
import HomeCategory from "./HomeCategory";
import axios from "axios";

function Home() {
  const [allProduct, setAllProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    axios(`https://fakestoreapi.com/products`).then((data) =>
      setAllProduct(data.data)
    );
  }, []);


  return (
    <div className="w-full min-h-screen bg-bb">
    <div className="md:block hidden">
         {/* <Nav /> */}
         <Navbar/>
      <div className="">
        <h1 className="text-center my-3 font-roboto font-normal">
          Shopoo protects you from payment to delivery with Trade Assurance.
        </h1>
      </div>

      <div className="flex justify-between bg-gray-200 gap-x-8 w-full h-full">
        <Saidebar />

        <div className="w-full">
          {" "}
          <HomeCategory  currentPage={currentPage} allProduct={allProduct} setCurrentPage={setCurrentPage}/>
        
        </div>
      
      </div>
      <div className="bg-gray-200  w-full">
      {/* <Pagination/> */}
      <Footer/>
      </div>
    </div>
   <div className="md:hidden  block">
    <HomeMop/>
   </div>
     
    </div>
  );
}

export default Home;
