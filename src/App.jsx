
import { Route, Routes } from "react-router";
import Home from './pages/Home'

import Register from "./pages/Register";
import Bags from "./pages/Bags";
import ShoppingCart from "./pages/ShoppingCart";
import Orders from "./pages/Orders";
import OrderHome from "./pages/OrderHome";
import Blouse from "./pages/Blouse";
import LandingPage from "./pages/LandingPage";
import Manufacturers from "./pages/Manufacturers";
import Test from "./pages/Test";
import ImageDetails from "./Components/landingPage/ImageDetails";
import Login from "./pages/Login";
import Shoes from "./pages/Shoes";
import AllCategory from "./pages/AllCategory";
export default function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        
        <Route path="/manufacturers" element={<Manufacturers/>}/>
        <Route path="/sign" element={<Register/>}/>
        <Route path="/bags" element={<Bags/>}/>
        <Route path="/blouse" element={<Blouse/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/cart" element={<ShoppingCart/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/ordersHome" element={<OrderHome/>}/>
        <Route path="/Test" element={<Test/>}/>
        <Route path="/image/:id" element={<ImageDetails/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/allcategory" element={<AllCategory/>}/>
      </Routes>
    </div>
  )
}
