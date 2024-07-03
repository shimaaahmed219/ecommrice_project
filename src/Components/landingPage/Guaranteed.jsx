import { BsCheckCircle } from "react-icons/bs";

export default function Guaranteed() {
  return (
    <div className="w-[90%] m-auto  mb-10 font-inter justify-center  flex pt-5  flex-col min-h-[100px] bg-b rounded-[20px]">
      <h1 className="text-center text-litter tracking-[-1px] capitalize font-bold text-[28px]">
        {" "}
        <span className="text-oranged">shoppingoo</span> Guaranteed
      </h1>

      <div className=" px-10 flex font-roboto justify-between text-[15px] my-5 items-center">
        <h3 className="flex gap-x-2 items-center">
          <BsCheckCircle />
          Fixed prices with shipping includes
        </h3>
        <h3 className="flex gap-x-2 items-center">
          {" "}
          <BsCheckCircle />
          Guaranteed delivery by the scheduled dates
        </h3>
        <h3 className="flex gap-x-2 items-center">
          {" "}
          <BsCheckCircle />
          Mony-back gurantee
        </h3>
      </div>
    </div>
  );
}
