import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
  return (
    <div className="w-full absolute flex my-10 justify-center  top-[200px]">
      <div className="w-4/6 h-[60px] bg-white py-1 flex justify-between  px-1 rounded-[50px]">
        <input
          placeholder="bag..."
          type="search"
          className="w-[87%] h-full rounded-[50px] focus:outline-none px-5"
        />
        <button className="flex font-semibold text-[17px] w-[15%] justify-center rounded-[50px]  items-center bg-oranged text-white">
          <SearchIcon /> search...
        </button>
      </div>
    </div>
  );
}
