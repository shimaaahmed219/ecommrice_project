import { useState } from 'react';
// import './App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTouchStart = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <button
        onTouchStart={handleTouchStart}
        className="p-2 bg-blue-500 text-white rounded-md cursor-pointer"
      >
        Toggle Navbar
      </button>
      {isOpen && (
        <div className="absolute text-red-500 top-16 right-0 bg-white shadow-lg p-4 rounded-md">
          <ul>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Home</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">About</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

function Test() {
  return (
    <div className="Test">
      <Navbar />
    </div>
  );
}

export default Test;
