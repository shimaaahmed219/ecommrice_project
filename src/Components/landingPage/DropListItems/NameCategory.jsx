/* eslint-disable react/prop-types */


export default function NameCategory({data,handleCategoryClick}) {
  
  return (
    <div className="h-[400px]  bg-white overflow-auto">
      <ul>
        {data.map((catigory) => (
          <li
          onMouseOver={()=>handleCategoryClick(catigory.id)}
            className="leading-8 py-2 hover:text-black hover:font-semibold hover:bg-bg px-3 cursor-pointer font-roboto text-gray-800 text-[15px]"
            key={catigory.id}
          >
            {catigory.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
