import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Slider from "react-slick";

export default function Seal() {
  const [seal, setSeal] = useState([]);
  const [favorites, setFavorites] = useState({});

  const handleFavClick = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setSeal(data.data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mx-[50px] my-6 font-roboto bg-bb">
      <h1 className="my-10 font-bold text-[32px] text-oranged">10% discount</h1>
      <Slider {...settings}>
        {seal.map((item) => (
          <div key={item.id} className="">
            <div className="mb-3 relative">
              <img src={item.image} alt={item.title} className="w-[180px] h-[250px]" />
              <input
                type="button"
                value="add to cart"
                className="opacity-0 absolute top-[100px] left-[60px] cursor-pointer hover:opacity-100 font-crimson w-[80px] h-[40px] bg-oranged text-white rounded-[25px]"
              />
              <button
                className="absolute bottom-5 right-6 text-oranged"
                onClick={() => handleFavClick(item.id)}
              >
                {favorites[item.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </button>
            </div>
            <h6 className="px-5 font-light">{item.title.substring(0, 20)}</h6>
            <div className="flex justify-between px-5">
              <span className="font-bold">
                <del>{item.price}</del> EGP
              </span>
              <h3 className="font-bold">
                {(item.price - item.price * 0.1).toFixed(2)} <span>EGP</span>
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
