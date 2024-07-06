import { useState } from "react";
import { useSwipeable } from 'react-swipeable';
export default function Business() {
  
    const [currentIndex, setCurrentIndex] = useState(0);

  const rectangles = [
    { id: 1, color: "bg-red-500" },
    { id: 2, color: "bg-blue-500" },
    { id: 3, color: "bg-green-500" },
    { id: 4, color: "bg-yellow-500" },
    { id: 5, color: "bg-purple-500" },
    { id: 6, color: "bg-pink-500" },
  ];
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % rectangles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + rectangles.length) % rectangles.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <div {...swipeHandlers} className="flex overflow-hidden items-center justify-center h-screen bg-gray-100">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {rectangles.map((rectangle) => (
          <div key={rectangle.id} className={`w-full flex-shrink-0 h-32 ${rectangle.color}`}>
            <p className="text-white text-center mt-12">Rectangle {rectangle.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
 
 
