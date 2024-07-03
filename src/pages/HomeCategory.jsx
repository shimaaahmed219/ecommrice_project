import axios from "axios";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
export default function HomeCategory() {
  const [allProduct, setAllProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  useEffect(() => {
    axios(`http://localhost:3000/all`).then((data) => setAllProduct(data.data));
  }, []);
  console.log(allProduct);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProduct.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allProduct.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="py-10 w-full">
      <div className="grid grid-cols-4 gap-x-5 px-3">
        {currentItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} className=" hover:scale-[1.1] h-[250px] w-[250px]" alt={item.title} />
            <h6 className="font-light font-roboto mt-3 text-[15px]">
              {item.title.substring(0, 30)}
            </h6>
            <h6 className="font-bold">
              EGP{item.price}{" "}
              <span className="text-gray-300 text-[15px] font-light">/price</span>
            </h6>
            <h6 className="font-light">
              1 price{" "}
              <span className="text-gray-200 text-[15px] font-light">min order</span>
            </h6>
            <div>
              4.5
              <StarIcon className="text-orange-500" />
              <span>({item.id})</span>{" "}
              <span className="ml-4 text-gray-500">{"great service"}</span>
            </div>
            <div className="flex items-center pr-10">
              <button className="bg-orange-500 text-white w-[80px] h-[40px] rounded-[25px] my-5">
                Buy Now
              </button>
              <MapsUgcIcon className="text-blue-500 ms-auto" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center   mt-10  w-[100%] h-[80px] items-center bg-bb">
        <button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1} 
          className="bg-gray-300 items-center justify-center flex text-black w-[30px] h-[30px] rounded-full mx-2"
        >
          <GrFormPrevious/>
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`w-[30px] h-[30px] rounded-[4px] mx-1 ${
              currentPage === index + 1 ? 'bg-oranged text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="bg-gray-300 items-center justify-center flex text-black w-[30px] h-[30px] rounded-full mx-2"
        >
         <MdNavigateNext className="text-[20px]"/>
        </button>
      </div>
    </div>
  );
}

