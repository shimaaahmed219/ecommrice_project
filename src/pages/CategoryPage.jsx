import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Saidebar from "../Components/Saidebar";
import Navbar from "../Components/Navbar";
import Seal from "../Components/Seal";
import AllCategory from "./AllCategory";
import { FaCheckCircle } from "react-icons/fa";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedProductId, setClickedProductId] = useState(null);
  const [addedToCart, setAddedToCart] = useState([]);
  const userId = 1;

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((data) => {
      const filteredProducts = data.data.filter(
        (product) => product.category === categoryName
      );
      setProducts(filteredProducts);
    });
  }, [categoryName]);

  const addToCart = (item) => {
    setLoading(true);
    setClickedProductId(item.id);

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
        setAddedToCart((prev) => [...prev, item.id]);
      })
      .catch((error) => console.error("Error adding to cart:", error))
      .finally(() => {
        setLoading(false);
        setClickedProductId(null);
      });
  };

  return (
    <>
      <div className="md:block hidden w-full min-h-screen bg-bg">
        <Navbar />

        <div className="flex">
          <div className="">
            <Saidebar />
          </div>

          <div className="w-[80%] h-full">
            <div className="lg:block hidden">
              <Seal />
            </div>

            {products.map((item) => (
              <div key={item.id} className="flex bg-white my-5 lg:mx-10 mx-5">
                <img
                  src={item.image}
                  className="lg:w-[250px] h-[250px]"
                  alt={item.title}
                />
                <div className="lg:w-[500px] ml-10 font-roboto py-5">
                  <h3 className="lg:text-[16px] text-[14px]">
                    {item.title.substring(0, 20)}
                  </h3>
                  <h3 className="font-bold lg:text-[35px] text-[25px] ">
                    {item.price} EGP
                  </h3>
                  <h3 className="mb-3">15 orders</h3>
                  <p className="text-gray-600 lg:text-[16px] text-[14px]">
                    {item.description.substring(0, 50)}
                  </p>
                </div>
                <div className="lg:w-[260px] flex flex-col items-center">
                  <button
                    onClick={() => addToCart(item)}
                    disabled={loading && clickedProductId === item.id}
                    className={`border-2 mt-[50px] ${
                      addedToCart.includes(item.id)
                        ? "bg-oranged"
                        : "bg-oranged"
                    } text-white font-roboto my-3 lg:text-[20px] rounded-[20px] px-5 lg:w-[180px] h-[50px]`}
                  >
                    {addedToCart.includes(item.id) ? (
                      <span className="flex justify-center items-center">
                       
                        <FaCheckCircle  className="mx-2"/>
                        Added
                      </span>
                    ) : (
                      "buy now"
                    )}
                  </button>
                  <h1>Compare</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <AllCategory />
      </div>
    </>
  );
}
