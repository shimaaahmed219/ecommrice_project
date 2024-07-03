import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterEnd() {
  return (
    <div className="bg-white w-[90%] m-auto my-10 py-10 font-inter">
    <div className="grid grid-cols-5 items-center justify-center  ">
      <div className="gap-y-4 grid m-auto font-roboto  ">
        <h1 className="font-bold text-header">Get support</h1>
        <h6>Help Center</h6>
        <h6>Live chat</h6>
        <h6>Check order status</h6>
        <h6>Refunds</h6>
        <h6>Report abuse</h6>
      </div>
      <div className="gap-y-4 grid m-auto">
        <h1 className="font-bold text-header"> Trade Assurance</h1>
        <h6>Safe and easy payments</h6>
        <h6>Money-back policy</h6>
        <h6>On-time shipping</h6>
        <h6>After-sales protections</h6>
        <h6>Product monitoring services</h6>
      </div>
      <div className="gap-y-4 grid m-auto">
        <h1 className="font-bold text-header">Source on shoppo.com</h1>
        <h6>Request for Quotation</h6>
        <h6>Membership program</h6>
        <h6>shoppo.com Logistics</h6>
        <h6>Sales tax and VAT</h6>
        <h6>shoppo.com Reads</h6>
      </div>
      <div className="gap-y-4 grid m-auto">
        <h1 className="font-bold text-header"> Sell on shoppo.com</h1>
        <h6>Start selling</h6>
        <h6>Seller Central</h6>
        <h6>Become a Verified Supplier</h6>
        <h6>Partnerships</h6>
        <h6>Download the app for suppliers</h6>
      </div>
      <div className="gap-y-4 grid m-auto mt-[-1px]">
        <h1 className="font-bold text-header">Get to know us</h1>
        <h6 className="text-oranged cursor-pointer">About shoppo.com</h6>
        <h6>Corporate responsibility</h6>
        <h6>News center</h6>
        <h6>Careers</h6>
      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex text-[30px] gap-x-3 text-gray-600 m-10">
        <Link>
          <FaFacebook className="hover:scale-[1.1]" />{" "}
        </Link>
        <Link>
          <FaTwitter className="hover:scale-[1.1]" />{" "}
        </Link>
        <Link>
          <FaInstagram className="hover:scale-[1.1]" />
        </Link>
        <Link>
          <FaYoutube className="hover:scale-[1.1]" />{" "}
        </Link>
        <Link>
          <FaLinkedin className="hover:scale-[1.1]" />
        </Link>
        <Link>
          <FaTiktok className="hover:scale-[1.1]" />
        </Link>
      </div>
      <div className="flex m-10 gap-x-3 text-[30px] text-white">
        <div className="w-[122px] h-[40px] bg-black  justify-center items-center px-1 flex rounded-[10px]">
          <FaApple />
          <div>
            <h6 className="text-[9px]  flex flex-col justify-center items-center capitalize font-light">
              dowenload on the
            </h6>
            <h3 className="text-[15px] font-semibold">app store</h3>
          </div>
        </div>
        <div className="w-[122px] h-[40px] bg-black  justify-center items-center px-1 flex rounded-[10px]">
          <BsGooglePlay />
          <div>
            <h6 className="text-[9px]  flex flex-col justify-center items-center capitalize font-light">
              dowenload on the
            </h6>
            <h3 className="text-[15px] font-semibold">goggle play</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
