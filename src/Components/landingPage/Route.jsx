import { Link,  useLocation } from "react-router-dom";

export default function Route() {
  const location = useLocation();
  return (
    <>
      <div className="absolute z-40 md:top-[160px] top-[100px] w-full md:gap-x-[100px] gap-x-[40px] text-white font-bold md:text-[30px] sm:text-[20px] text-[18px] flex  justify-center items-center">
        <Link
          to="/"
          className={`${
            location.pathname === "/" ? "border-b-oranged  z-40 border-b-4 " : ""
          }`}
        >
          Products
        </Link>
        <Link
          to="/manufacturers"
          className={`${
            location.pathname === "/manufacturers"
              ? "border-b-oranged border-b-4 "
              : ""
          }`}
        >
          {" "}
          Manufacturers
        </Link>
      </div>
    </>
  );
}
