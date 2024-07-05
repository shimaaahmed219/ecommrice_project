/* eslint-disable react/prop-types */

export default function Product({ filteredItems }) {

  return (
    <div  className="h-[400px] bg-white py-4 font-semibold overflow-auto text-center">
      {filteredItems && (
        <div>

          <ul className="grid gap-y-2  grid-cols-3 justify-center items-center">
            {filteredItems.map((item) => (
              <li key={item.id} className="my-3">
                <img
                  className="w-[50px] m-auto h-[50px] rounded-full"
                  src={item.image}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
