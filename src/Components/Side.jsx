import { FormControlLabel,Checkbox } from "@mui/material";
export default function Side() {
  return (
    <div className="font-roboto">
   
<form>
<h3 className="my-3 font-roboto font-bold">Supplier types</h3>
<FormControlLabel className="text-thin"  required control={<Checkbox className="hover:text-oranged"/>} label='Trade Assurance' />
<FormControlLabel required control={<Checkbox className="hover:text-oranged" />} label="Supplier" />
  

<h3 className="font-bold mt-5">Min. order</h3>
  <div className="flex">
  <input type="text" className="w-[70%] outline-none border-[3px] rounded-[10px]"/>
    <input type="submit" value="ok" className=" hover:bg-gray-200 cursor-pointer border-[3px] w-[25%] rounded-[10px]"/>
   

  </div>
</form>

<div>

</div>
    </div>
  
  )
}
