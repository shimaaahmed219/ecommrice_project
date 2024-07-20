import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import LandingPage from "./pages/LandingPage";
import Manufacturers from "./pages/Manufacturers";
import ImageDetails from "./Components/landingPage/ImageDetails";
import Login from "./pages/Login";
import AllCategory from "./pages/AllCategory";
import Cart from "./pages/Cart";
import CategoryPage from "./pages/CategoryPage";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manufacturers" element={<Manufacturers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/image/:id" element={<ImageDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="/allcategory" element={<AllCategory />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}
