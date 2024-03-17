
import { Route, Routes } from "react-router";
import Home from './pages/Home'
import About from "./pages/About";

import Register from "./pages/Register";
import Bags from "./pages/Bags";
import ShoppingCart from "./pages/ShoppingCart";
import Orders from "./pages/Orders";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/contect" element={<Contact/>}/> */}
        <Route path="/sign" element={<Register/>}/>
        <Route path="/bags" element={<Bags/>}/>
        <Route path="/cart" element={<ShoppingCart/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
    </div>
  )
}
