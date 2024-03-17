
import Catogery from "./Catogery";
import Country from "./Country";
import Side from "./Side";


export default function Saidebar() {
  return (
    <div className=" w-[200px] bg-gray-50 min-h-[600px] px-2 mt-5">
<h3 className="my-3 font-roboto font-bold">Categories</h3>
<Catogery/>
<Side/>
<Country/>
</div>
  )
}
