import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
const SelectedCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategories(response.data);
        if (response.data.length > 0) {
          setSelectedCategory(response.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderImageRows = (images) => {
    const rows = [];
    for (let i = 0; i < images.length; i += 3) {
      const imageRow = images.slice(i, i + 3);
      rows.push(
        <div
          className=" bg-bb w-full"
          key={i}
          style={{ display: "flex", flexDirection: "column", margin: "10px" }}
        >
          {imageRow.map((image) => (
            <div key={image.id} className="flex p-4 items-center ">
              <Link to={`/image/${image.id}`}>
                <img
                  className="rounded-[10px] mr-2 "
                  src={image.url}
                  alt={image.title}
                  style={{ width: "150px", height: "150px" }}
                />
              </Link>

              <p className="text-inter font-semibold">{image.title}</p>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="w-[90%] m-auto">
      <div className="flex justify-between  my-10">
        <h1 className="  text-[28px] font-inter font-bold">Top ranking</h1>
        <Link
          to="/home"
          className="font-inter flex items-center font-[500px] text-[20px] capitalize underline"
        >
          view more <GrFormNextLink />
        </Link>
      </div>

      <div className="mb-[20px]">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            style={{
              borderColor:
                selectedCategory && selectedCategory.id === category.id
                  ? "black"
                  : "#b5aeae",
            }}
            className="border-[2px] px-3 py-2 mx-2 rounded-[50px]"
          >
            {category.title}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div>
          <div className=" flex justify-between items-center ">
            {renderImageRows(selectedCategory.images)}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedCategory;
