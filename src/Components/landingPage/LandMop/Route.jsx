
import { Link,  useLocation } from "react-router-dom";

export default function Route() {
  const location = useLocation();
  return (
    <>
      <div className=" my-3 flex gap-x-4  border-b-gray-200 border-b-[1px] ">
        <Link
          to="/"
          className={`${
            location.pathname === "/" ? "border-b-black py-3  px-3 font-bold  z-40 border-b-2 " : "py-3"
          }`}
        >
          Products
        </Link>
        <Link
          to="/manufacturers"
          className={`${
            location.pathname === "/manufacturers"
              ? "border-b-black px-3 font-bold py-3 z-40 border-b-2 "
              : "py-3"
          }`}
        >
          {" "}
          Manufacturers
        </Link>
      </div>
    </>
  );
}
