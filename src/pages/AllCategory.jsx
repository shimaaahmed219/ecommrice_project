import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "../Components/landingPage/LandMop/Nav";
import Footer from "../Components/landingPage/LandMop/Footer";

export default function AllCategory() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);
  const userId = 1;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        if (response.data.length > 0) {
          setSelectedCategory(response.data[0]);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => console.error("Error fetching items:", error));
    }
  }, [selectedCategory]);

  const addToCart = (item) => {
    const cartItem = {
      userId: userId,
      date: new Date().toISOString(),
      products: [{ productId: item.id, quantity: 1 }],
    };

    axios
      .post(`https://fakestoreapi.com/carts`, cartItem)
      .then((response) => {
        console.log("Item added to cart:", response.data);
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
      })
      .catch((error) => console.error("Error adding to cart:", error));
  };

  return (
    <div className="container mx-auto pb-10">
      <Nav />
      <h1 className="text-[15px] font-bold my-4">All categories</h1>
      <div className="flex justify-between font-bold text-[12px] mb-4 border-b-[1px]">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-2 ${
              selectedCategory === category ? "border-b-2 border-black" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4 mx-1">
        Items in {selectedCategory}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((item) => (
          <div key={item.id} className="p-4">
            <div className="w-full rounded-[20px] bg-bb h-[150px] flex justify-center items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-[80%] h-[130px]"
              />
            </div>

            <h3 className="ml-1 text-[14px] font-inter mt-2">
              {item.title.substring(0, 15)}
            </h3>
            <p className="ml-1 font-bold text-[14px]">${item.price} USD</p>
            <p className="ml-1 text-[12px] capitalize">min order 2 pieces</p>
            <div>
              <button
                className="w-full flex rounded-[20px] h-[30px] justify-center items-center bg-oranged text-[14px] mt-1 text-white"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
