import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
  return (
    <div className="w-full absolute flex my-10 justify-center  md:top-[200px] top-[180px]">
      <div className="w-4/6 md:h-[60px] h-[50px] bg-white py-1 flex justify-between  px-1 sm:rounded-[50px] rounded-[20px]">
        <input
          placeholder="bag..."
          type="search"
          className="w-[87%] h-full md:rounded-[50px] rounded-[20px] focus:outline-none px-5"
        />
        <button className="sm:flex hidden font-semibold text-[17px] md:w-[15%] w-[25%] justify-center md:rounded-[50px] rounded-[20px]  items-center bg-oranged text-white">
          <SearchIcon /> search...
        </button>
      </div>
    </div>
  );
}
