import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import "../Components/css/Login.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export default function Login() {
  const { register, handleSubmit, watch } = useForm();
  const [valid, setValid] = useState(false);
  const watched = watch();
  const navigate = useNavigate()
  useEffect(() => {
    const isValid = watched.email !== "";
    setValid(isValid);
  }, [watched]);
  const onsubmit = (data) => {
    console.log(data);
    setTimeout(() => {
        navigate("/home");
      }, 1000);
   
  };
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      {/* <Nav /> */}
      <form
        onSubmit={handleSubmit(onsubmit)}
        className=" md:w-2/6 h-full py-5 flex flex-col m-auto justify-center items-center"
      >
        <h1 className="font-inter font-semibold my-3 ">Sign In/Register</h1>
        <h6 className="text-red-500 font-inter text-[10px] font-bold mb-4">
          Get US$3 off coupon and more
        </h6>
        <label
          htmlFor=""
          className="me-auto text-[14px] font-inter font-semibold"
        >
          Mobile number or email address:
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full transition delay-75 ease-in-out p-2 bg-transparent border-[1px] focus:outline-none border-gray hover:border-black"
        />
        <button
          disabled={!valid}
          type="submit"
          className={` ${
            !valid ? "hover:bg-gray-600" : "bg-oranged"
          } bg-oranged w-full h-[50px] text-white font-bold my-5 flex  justify-center items-center uppercase`}
        >
          continue
        </button>

        <div className="flex items-center">
          <hr className="w-[80px]" />
          <span className="mx-5 capitalize text-gray-500 font-inter">or</span>
          <hr className="w-[80px]" />
        </div>
        <button className="w-full h-[50px]  text-[15px] hover:bg-bg hover:border-none my-5 flex justify-center items-center uppercase transition delay-75 ease-in-out p-2 bg-transparent border-[1px] focus:outline-none border-gra">
          {" "}
          <FaFacebook className="text-blue-500 text-[30px] mx-2" />
          continue with facebook
        </button>
        <button className="w-full h-[50px] text-[15px] hover:bg-bg hover:border-none  my-5 flex justify-center items-center uppercase transition delay-75 ease-in-out p-2 bg-transparent border-[1px] focus:outline-none border-gray">
          <div className="google-icon">
            {" "}
            <FaGoogle className="text- text-[30px] mx-2 text-fuchsia-900 " />
          </div>
          continue with google
        </button>
      </form>
    </div>
  );
}
