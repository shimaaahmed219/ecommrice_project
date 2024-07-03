
import Nav from "../Components/Nav";
import Saidebar from "../Components/Saidebar";
export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-bb">
      <Nav />

      <div className="">
        <h1 className="text-center my-3 font-roboto font-normal">
          Shopoo protects you from payment to delivery with Trade Assurance.
        </h1>
      </div>

      <div className="flex justify-around bg-gray-200 gap-x-8 w-full h-full">
       
      
       <Saidebar />
       
        <div className="w-full">
          {" "}
        
        </div>
      </div>
    </div>

  )
}
