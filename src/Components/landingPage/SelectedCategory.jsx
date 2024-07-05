import {  useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
const SelectedCategory = () => {
  const categories=[
    {
      "id": 1,
      "title": "Most popular",
      "images": [
        {
          "id": 1,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBqQYATniDd9xu_iaGTO8MDZicSfcLJaA1g&usqp=CAU",
          "title": "Most popular score 2.4",
          "price": 600
        },
        {
          "id": 2,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiQL8mRG6gIJSt5tOSLqS9L6FRk6dEYWeOQ&usqp=CAU",
          "title": "Most popular score 2.4",
          "price": 600
        },
        {
          "id": 3,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xvnR3CEgZ4L-Um6ugGBS4-kfMmzzqC_Lsw&usqp=CAU",
          "title": "Most popular score 2.4",
          "price": 600
        },
        {
          "id": 4,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfqDw2eZZR9NWLwlfY6M2ZVVL1xN4hvGQUw&usqp=CAU",
          "title": "Most popular score 2.4",
          "price": 600
        },
        {
          "id": 5,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWb38XknIdS_nU8Tw0uWNE8cNmXioM4Jaa6A&usqp=CAU",
          "title": "Most popular score 2.4",
          "price": 600
        },
        {
          "id": 6,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVkrD5TQs0eshdhOpBwjMDyGysSgXMOikkw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYdpk9MuPotDghrB0xlWF7hw1OdLzI3HCvw&usqp=CAU",
          "title": "Most popular score 2.4",
          "price": 600
        },
        {
          "id": 7,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEHM0UPy0fZkODcMJHTIeKfD3c6CuX9xt935gzUg6-PvXfJky_Li_Zw4dKK2ypCRAqcg&usqp=CAU",
          "title": "Most popular score 2.4",
          "price": 600
        },
        {
          "id": 8,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQShh_t1tonVg7aIlJYf4u3U6zAWDA8PIYiw&usqp=CAU",
          "title": "Most popular score 2.4",
          "price": 600
        },
        {
          "id": 9,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TB3ZitE88afO-9t1cR6zr7uxr3IDtgrnbw&usqp=CAU",
          "title": "Most popular score 2.4",
          "price": 600
        }
      ]
    },
    {
      "id": 2,
      "title": "Hot selling",
      "images": [
        {
          "id": 10,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TB3ZitE88afO-9t1cR6zr7uxr3IDtgrnbw&usqp=CAU",
          "title": "Hot selling score 3.5",
          "price": 600
        },
        {
          "id": 11,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVkrD5TQs0eshdhOpBwjMDyGysSgXMOikkw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYdpk9MuPotDghrB0xlWF7hw1OdLzI3HCvw&usqp=CAU",
          "title": "Hot selling score 3.5",
          "price": 600
        },
        {
          "id": 12,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfqDw2eZZR9NWLwlfY6M2ZVVL1xN4hvGQUw&usqp=CAU",
          "title": "Hot selling score 3.5",
          "price": 600
        },
        {
          "id": 13,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xvnR3CEgZ4L-Um6ugGBS4-kfMmzzqC_Lsw&usqp=CAU",
          "title": "Hot selling score 3.5",
          "price": 600
        },
        {
          "id": 14,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWb38XknIdS_nU8Tw0uWNE8cNmXioM4Jaa6A&usqp=CAU",
          "title": "Hot selling score 3.5",
          "price": 600
        },
        {
          "id": 15,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiQL8mRG6gIJSt5tOSLqS9L6FRk6dEYWeOQ&usqp=CAU",
          "title": "Hot selling score 3.5",
          "price": 600
        },
        {
          "id": 16,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBqQYATniDd9xu_iaGTO8MDZicSfcLJaA1g&usqp=CAU",
          "title": "Hot selling score 3.5",
          "price": 600
        },
        {
          "id": 17,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEHM0UPy0fZkODcMJHTIeKfD3c6CuX9xt935gzUg6-PvXfJky_Li_Zw4dKK2ypCRAqcg&usqp=CAU",
          "title": "Hot selling score 3.5",
          "price": 600
        },
        {
          "id": 18,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQShh_t1tonVg7aIlJYf4u3U6zAWDA8PIYiw&usqp=CAU",
          "title": "Hot selling score 3.5",
          "price": 600
        }
      ]
    },
    {
      "id": 3,
      "title": "Best reviewed",
      "images": [
        {
          "id": 19,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVkrD5TQs0eshdhOpBwjMDyGysSgXMOikkw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYdpk9MuPotDghrB0xlWF7hw1OdLzI3HCvw&usqp=CAU",
          "title": "Best reviewed score:2.3",
          "price": 600
        },
        {
          "id": 20,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfqDw2eZZR9NWLwlfY6M2ZVVL1xN4hvGQUw&usqp=CAU",
          "title": "Best reviewed score:2.3",
          "price": 600
        },
        {
          "id": 21,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TB3ZitE88afO-9t1cR6zr7uxr3IDtgrnbw&usqp=CAU",
          "title": "Best reviewed score:2.3",
          "price": 600
        },
        {
          "id": 22,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiQL8mRG6gIJSt5tOSLqS9L6FRk6dEYWeOQ&usqp=CAU",
          "title": "Best reviewed score:2.3",
          "price": 600
        },
        {
          "id": 23,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEHM0UPy0fZkODcMJHTIeKfD3c6CuX9xt935gzUg6-PvXfJky_Li_Zw4dKK2ypCRAqcg&usqp=CAU",
          "title": "Best reviewed score:2.3",
          "price": 600
        },
        {
          "id": 24,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBqQYATniDd9xu_iaGTO8MDZicSfcLJaA1g&usqp=CAU",
          "title": "Best reviewed score:2.3",
          "price": 600
        },
        {
          "id": 25,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQShh_t1tonVg7aIlJYf4u3U6zAWDA8PIYiw&usqp=CAU",
          "title": "Best reviewed score:2.3",
          "price": 600
        },
        {
          "id": 26,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWb38XknIdS_nU8Tw0uWNE8cNmXioM4Jaa6A&usqp=CAU",
          "title": "Best reviewed score:2.3",
          "price": 600
        },
        {
          "id": 27,
          "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xvnR3CEgZ4L-Um6ugGBS4-kfMmzzqC_Lsw&usqp=CAU",
          "title": "Best reviewed score:2.3",
          "price": 600
        }
      ]
    }
  
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/categories")
  //     .then((response) => {
  //       setCategories(response.data);
  //       if (response.data.length > 0) {
  //         setSelectedCategory(response.data[0]);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     });
  // }, []);

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
