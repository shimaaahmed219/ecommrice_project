import Nav from "../Components/Nav";
import Saidebar from "../Components/Saidebar";
import HomeCategory from "./HomeCategory";
function Home() {
  return (
    <div className="w-full min-h-screen bg-bb">
      <Nav />

      <div className="">
        <h1 className="text-center my-3 font-roboto font-normal">
          Shopoo protects you from payment to delivery with Trade Assurance.
        </h1>
      </div>

      <div className="flex justify-between bg-gray-200 gap-x-8 w-full h-full">
        <Saidebar />

        <div className="w-full">
          {" "}
          <HomeCategory />
        </div>
      </div>
    </div>
  );
}

export default Home;
