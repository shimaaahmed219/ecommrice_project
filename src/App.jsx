
import { Route, Routes } from "react-router";
import Home from './pages/Home'
import About from "./pages/About";

import Register from "./pages/Register";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/contect" element={<Contact/>}/> */}
        <Route path="/sign" element={<Register/>}/>
      </Routes>
    </div>
  )
}
