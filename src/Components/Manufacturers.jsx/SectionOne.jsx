import axios from "axios";
import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { MdNavigateNext } from "react-icons/md";
import { CiUser } from "react-icons/ci";
export default function SectionOne() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/allCat`).then((res) => setCat(res.data));
  }, []);

  console.log(cat);
  return (
    <div className="w-[90%] m-auto  grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 xl:justify-between justify-around items-center">
      <div className="h-[400px] py-2 flex flex-col gap-y-2 w-[300px] text-black rounded-[10px] pb-2 bg-white">
        <h1 className="font-inter m-2 font-bold ">Source by category</h1>
        {cat.map((item) => (
          <div
            key={item.id}
            className="flex py-1  items-center px-2 gap-x-3 hover:bg-bg"
          >
            <img src={item.image} className="w-[30px] h-[30px] rounded-full" />
            <div className="text-[13px] font-inter flex items-center w-full ">
              {item.name}{" "}
              <MdNavigateNext className="text-[20px] ms-auto text-gray-400" />
            </div>
          </div>
        ))}
        {cat.map((item) => (
          <div
            key={item.id}
            className="flex py-1 items-center px-2 gap-x-3 hover:bg-bg"
          >
            <img src={item.image} className="w-[30px] h-[30px] rounded-full" />
            <div className="text-[13px] font-inter flex items-center w-full ">
              {item.name}{" "}
              <MdNavigateNext className="text-[20px] ms-auto text-gray-400" />
            </div>
          </div>
        ))}
        <div className="flex w-full items-center px-2 py-2 mb-2  hover:bg-bg ">
          {" "}
          <BiCategory className="text-[30px]  font-light " />
          <h5 className="px-2 text-[13px] ">All categories</h5>
        </div>
      </div>
      <div>
        <div className="h-[195px] py-2 mb-2 w-[300px] rounded-[10px] bg-white">
          <h1 className="px-5 font-inter font-bold ">Get samples</h1>
          <div className="flex mt-[-10px] h-full justify-center gap-x-3 items-center">
            <div>
              <img
                className="w-[120px] hover:scale-[1.1] h-[120px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1csP__UMHl0Ga1sVdImst9HRG9OUVshrlw&usqp=CAU"
              />
              <h6 className="text-center  text-gray-500"> Newly released</h6>
            </div>

            <div>
              <img
                className="w-[120px] hover:scale-[1.1] h-[120px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2fyX66BQwF_YLMzOxtab3TcrgfZeGqdKXQ&usqp=CAU"
              />
              <h6 className="text-center text-gray-500"> Trending</h6>
            </div>
          </div>
        </div>
        <div className="h-[195px] py-2 mb-2 w-[300px] rounded-[10px] bg-white">
          <h1 className="px-5 font-inter font-bold ">Factory LIVE Q&A</h1>
          <div className="flex mt-[-10px] h-full justify-center gap-x-3 items-center">
            <div>
              <img
                className="w-[120px] hover:scale-[1.1] h-[120px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvF_NuNkjtWEgCxDIUf9i6gCrFmTVq3q7XA&usqp=CAU"
              />
              <h6 className="text-center  text-gray-500">
                {" "}
                Product review LI..
              </h6>
            </div>

            <div>
              <img
                className="w-[120px] hover:scale-[1.1] h-[120px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIzmoxdHhume5niMRKmCdu9P0YbeEFXmmag&usqp=CAU"
              />
              <h6 className="text-center text-gray-500"> Hot picks LIVE</h6>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="h-[400px] w-[300px] flex flex-col  gap-y-9 rounded-[10px] bg-white">
        <h1 className="px-5 font-inter font-bold pt-3 ">
          {" "}
          Top-ranking manufacturers
        </h1>
        <div className="flex justify-center mt-[-30px] gap-x-3 items-center">
          <div>
            <img
              className="w-[120px] hover:scale-[1.1] h-[120px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AUAzMJFfDsEOMAaAZSZiYccfHZgAz1wQ8Aq_DsalqMfbDssFDNb1APryZyN_TVTVpbU&usqp=CAU"
            />
            <h6 className="text-center  text-gray-500"> Newly released</h6>
          </div>

          <div>
            <img
              className="w-[120px] hover:scale-[1.1] h-[120px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKk6Gus6LN03aGtQeez8mV_TEZxM1zik41g&usqp=CAU"
            />
            <h6 className="text-center text-gray-500"> Trending</h6>
          </div>
        </div>
        <div className="flex justify-center gap-x-3 items-center">
          <div>
            <img
              className="w-[120px] hover:scale-[1.1] h-[120px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcftr50iZv00IObaBW0jhXbVXSjCGTz4-pw&usqp=CAU"
            />
            <h6 className="text-center  text-gray-500"> Newly released</h6>
          </div>

          <div>
            <img
              className="w-[120px] hover:scale-[1.1] h-[120px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzSOIpVCJEIxxdn5QFnXnGsEzien1JU12sQ&usqp=CAU"
            />
            <h6 className="text-center text-gray-500"> Trending</h6>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div>
        <div className="h-[290px] px-3 py-5 mb-2 w-[300px] rounded-[10px] bg-white">
          <div className="flex w-full gap-x-3">
            <div className="w-[50px] flex justify-center items-center h-[50px] bg-bg font-inter  rounded-full">
              <CiUser className="text-[25px] font-bold" />
            </div>
            <div>
              <h6 className="text-[10px]">welcome back</h6>
              <h1 className="font-bold capitalize">user name</h1>
            </div>
          </div>
          <div className="bg-bg w-full h-[70px]  py-4 my-5 flex">
            <h1 className=" w-3/6 border-r-[1px] border-gray-400 gap-x-3 items-center  flex ml-3">
              <span className="font-bold text-[20px]">0</span>
              <div className="text-[13px] w-[50px]"> Favorite products</div>
            </h1>
            <h1 className=" w-3/6 gap-x-3 items-center  flex ml-3">
              <span className="font-bold text-[20px]">0</span>
              <div className="text-[13px] w-[50px]"> Favorite  suppliers</div>
            </h1>
          </div>
          <h1 className="font-bold text-[20px] mt-[-15px] mb-2"> Your browsing history</h1>
          <div className="flex justify-between">
          <img
              className="w-[70px] hover:scale-[1.1] h-[70px] rounded-[10px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzSOIpVCJEIxxdn5QFnXnGsEzien1JU12sQ&usqp=CAU"
            />
             <img
                className="w-[70px] hover:scale-[1.1] h-[70px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvF_NuNkjtWEgCxDIUf9i6gCrFmTVq3q7XA&usqp=CAU"
              />
               <img
                className="w-[70px] hover:scale-[1.1] h-[70px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AUAzMJFfDsEOMAaAZSZiYccfHZgAz1wQ8Aq_DsalqMfbDssFDNb1APryZyN_TVTVpbU&usqp=CAU"
              />
          </div>
        </div>
        <div className="h-[100px] flex font-inter  flex-col items-center px-4 justify-center w-[300px] rounded-[10px] bg-white">
       <h6 className="text-[13px] ripple font-bold text-center">One request, multiple quotes</h6>
        <botton className="rounded-[20px] text-[13px] font-bold w-full flex justify-center items-center border-black border-[1px] p-2 px-4 my-2" >Request for Quotation</botton>
        </div>
      </div>
    </div>
  );
}
