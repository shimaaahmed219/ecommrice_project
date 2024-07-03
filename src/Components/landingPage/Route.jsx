import { Link,  useLocation } from "react-router-dom";

export default function Route() {
  const location = useLocation();
  return (
    <>
      <div className="absolute z-40 top-[160px] w-full gap-x-[100px] text-white font-bold text-[30px] flex  justify-center items-center">
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
