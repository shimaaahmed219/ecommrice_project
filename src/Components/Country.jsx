import eg from "../../image/bag/eg.svg";
import pl from "../../image/bag/ps.svg";
import sd from "../../image/bag/sd.svg";
import sy from "../../image/bag/sy.svg";
import ye from "../../image/bag/ye.svg";
import { useState } from "react";

const country = [
  { id: 1, name: "egypt", src: eg },
  { id: 2, name: "Syria", src: sy },
  { id: 3, name: " Palestine", src: pl },
  { id: 4, name: "Sudan", src: sd },
  { id: 5, name: "Yemen", src: ye },
];
export default function Country() {
  const [coun, setCoun] = useState(false);
  const checkCountry = (id) => {
    setCoun(true);
    console.log(id);
  };

  return (
    <div>
      <h1 className="font-bold font-roboto my-5">Supplier country/region</h1>
      <input
        type="text"
        className="px-5 w-[80%] m-auto outline-none border-[1px] my-5 py-1 rounded-[5px] border-grey-300"
        placeholder="search..."
      />
      {country.map((item) => (
        <div key={item.id} className="mb-5">
          <input
            type="checkbox"
            id={item.id}
            className=""
            value={coun}
            onChange={() => checkCountry(item.id)}
          />
          <img src={item.src} className=" mx-2 inline-block" width={20} />
          {item.name}
        </div>
      ))}
    </div>
  );
}
