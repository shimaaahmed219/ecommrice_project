import { CiSearch } from "react-icons/ci";
export default function Nav() {
  return (
    <div className="flex fixed bg-bgMob right-0 w-full z-50 top-0 justify-between px-5 py-2">
      <h1 className=" font-charmonman text-oranged text-[20px] font-semibold">
        shopingoo.com
      </h1>
      <div className="flex  items-center bg-search px-2 text-[10px] rounded-[20px]">
        <CiSearch />
        <input
          className="bg-search px-1 focus:outline-none text-[10px] rounded-[20px]"
          type="search"
          placeholder="what are you looking for.."
        />
      </div>
    </div>
  );
}
