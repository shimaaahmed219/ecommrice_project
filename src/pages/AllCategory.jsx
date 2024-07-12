import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "../Components/landingPage/LandMop/Nav";
import Footer from "../Components/landingPage/LandMop/Footer";

export default function AllCategory() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch categories
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        // Set the first category as selected by default
        if (response.data.length > 0) {
          setSelectedCategory(response.data[0]);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Fetch items for the selected category
      axios
        .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => console.error("Error fetching items:", error));
    }
  }, [selectedCategory]);

  return (
    <div className="container mx-auto ">
      <Nav/>
      <h1 className="text-[15px] font-bold my-4">All categories</h1>
      <div className="flex justify-between font-bold text-[12px] mb-4 border-b-[1px]">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-2 ${
              selectedCategory === category
                ? "border-b-2 border-black"
                : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-4">Items in {selectedCategory}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((item) => (
          <div key={item.id} className=" p-4 ">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-[16px] font-bold mb-2">{item.title}</h3>
            <p>{item.price} USD</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
