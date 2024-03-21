import axios from "axios";
import { useEffect, useState } from "react";

export default function BagPage() {
  const [product, setProduct] = useState([]);
  // const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/bags`)
      .then((data) => setProduct(data.data));
  }, []);

  const addToCart = async (product) => {
    const productId = product.id;
    axios
      .get("http://localhost:3000/cart")
      .then((response) => {
        if (response.data) {
          const existingProduct = response.data.find(
            (item) => item.id === productId
          );
          if (!existingProduct) {
            axios
              .post("http://localhost:3000/cart", { ...product, id: productId })
              .then((response) => {
                console.log("Product added to cart:", response.data);
              })
              .catch((error) => {
                console.error("Error adding product to cart:", error);
              });
          } else {
            console.log("Product already exists in cart");
          }
        } else {
          console.log("Cart is empty or data structure is incorrect");
        }
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
      });
  };

  return (
    <div className="w-full h-full mt-[100px]">
      {product.map((item) => (
        <div key={item.id} className="flex bg-white my-5 mx-10">
          <img src={item.image} className="w-[250px] h-[250px]" />
          <div className="w-[500px] ml-10 font-roboto py-5">
            <h3>{item.title}</h3>
            <h3 className="font-bold text-[35px] ">{item.price} EGP</h3>
            <h3 className="mb-3">15 orders</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
          <div className="w-[260px]   flex flex-col items-center">
            <button
              onClick={() => addToCart(item)}
              className="border-2 mt-[50px] bg-oranged text-white font-roboto my-3 text-[20px] rounded-[20px] w-[180px] h-[50px]"
            >
              buy new
            </button>
            <h1>Compare</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
