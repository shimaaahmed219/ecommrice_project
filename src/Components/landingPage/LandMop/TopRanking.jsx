import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { GrFormNextLink } from "react-icons/gr";

export default function TopRanking() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const data=[
       
            {
              "id": 1,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBqQYATniDd9xu_iaGTO8MDZicSfcLJaA1g&usqp=CAU",
              "title": "Most popular score 2.4",
              "price": 600
            },
            {
              "id": 2,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiQL8mRG6gIJSt5tOSLqS9L6FRk6dEYWeOQ&usqp=CAU",
              "title": "Most popular score 2.4",
              "price": 600
            },
            {
              "id": 3,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xvnR3CEgZ4L-Um6ugGBS4-kfMmzzqC_Lsw&usqp=CAU",
              "title": "Most popular score 2.4",
              "price": 600
            },
            {
              "id": 4,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfqDw2eZZR9NWLwlfY6M2ZVVL1xN4hvGQUw&usqp=CAU",
              "title": "Most popular score 2.4",
              "price": 600
            },
            {
              "id": 5,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWb38XknIdS_nU8Tw0uWNE8cNmXioM4Jaa6A&usqp=CAU",
              "title": "Most popular score 2.4",
              "price": 600
            },
            {
              "id": 6,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVkrD5TQs0eshdhOpBwjMDyGysSgXMOikkw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYdpk9MuPotDghrB0xlWF7hw1OdLzI3HCvw&usqp=CAU",
              "title": "Most popular score 2.4",
              "price": 600
            },
            {
              "id": 7,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEHM0UPy0fZkODcMJHTIeKfD3c6CuX9xt935gzUg6-PvXfJky_Li_Zw4dKK2ypCRAqcg&usqp=CAU",
              "title": "Most popular score 2.4",
              "price": 600
            },
            {
              "id": 8,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQShh_t1tonVg7aIlJYf4u3U6zAWDA8PIYiw&usqp=CAU",
              "title": "Most popular score 2.4",
              "price": 600
            },
            {
              "id": 9,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TB3ZitE88afO-9t1cR6zr7uxr3IDtgrnbw&usqp=CAU",
              "title": "Most popular score 2.4",
              "price": 600
            }
          ,
            {
              "id": 10,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TB3ZitE88afO-9t1cR6zr7uxr3IDtgrnbw&usqp=CAU",
              "title": "Hot selling score 3.5",
              "price": 600
            },
            {
              "id": 11,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVkrD5TQs0eshdhOpBwjMDyGysSgXMOikkw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYdpk9MuPotDghrB0xlWF7hw1OdLzI3HCvw&usqp=CAU",
              "title": "Hot selling score 3.5",
              "price": 600
            },
            {
              "id": 12,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfqDw2eZZR9NWLwlfY6M2ZVVL1xN4hvGQUw&usqp=CAU",
              "title": "Hot selling score 3.5",
              "price": 600
            },
            {
              "id": 13,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xvnR3CEgZ4L-Um6ugGBS4-kfMmzzqC_Lsw&usqp=CAU",
              "title": "Hot selling score 3.5",
              "price": 600
            },
            {
              "id": 14,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWb38XknIdS_nU8Tw0uWNE8cNmXioM4Jaa6A&usqp=CAU",
              "title": "Hot selling score 3.5",
              "price": 600
            },
            {
              "id": 15,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiQL8mRG6gIJSt5tOSLqS9L6FRk6dEYWeOQ&usqp=CAU",
              "title": "Hot selling score 3.5",
              "price": 600
            },
            {
              "id": 16,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBqQYATniDd9xu_iaGTO8MDZicSfcLJaA1g&usqp=CAU",
              "title": "Hot selling score 3.5",
              "price": 600
            },
            {
              "id": 17,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEHM0UPy0fZkODcMJHTIeKfD3c6CuX9xt935gzUg6-PvXfJky_Li_Zw4dKK2ypCRAqcg&usqp=CAU",
              "title": "Hot selling score 3.5",
              "price": 600
            },
            {
              "id": 18,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQShh_t1tonVg7aIlJYf4u3U6zAWDA8PIYiw&usqp=CAU",
              "title": "Hot selling score 3.5",
              "price": 600
            },
            {
              "id": 19,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVkrD5TQs0eshdhOpBwjMDyGysSgXMOikkw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYdpk9MuPotDghrB0xlWF7hw1OdLzI3HCvw&usqp=CAU",
              "title": "Best reviewed score:2.3",
              "price": 600
            },
            {
              "id": 20,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfqDw2eZZR9NWLwlfY6M2ZVVL1xN4hvGQUw&usqp=CAU",
              "title": "Best reviewed score:2.3",
              "price": 600
            },
            {
              "id": 21,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TB3ZitE88afO-9t1cR6zr7uxr3IDtgrnbw&usqp=CAU",
              "title": "Best reviewed score:2.3",
              "price": 600
            },
            {
              "id": 22,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiQL8mRG6gIJSt5tOSLqS9L6FRk6dEYWeOQ&usqp=CAU",
              "title": "Best reviewed score:2.3",
              "price": 600
            },
            {
              "id": 23,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEHM0UPy0fZkODcMJHTIeKfD3c6CuX9xt935gzUg6-PvXfJky_Li_Zw4dKK2ypCRAqcg&usqp=CAU",
              "title": "Best reviewed score:2.3",
              "price": 600
            },
            {
              "id": 24,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBqQYATniDd9xu_iaGTO8MDZicSfcLJaA1g&usqp=CAU",
              "title": "Best reviewed score:2.3",
              "price": 600
            },
            {
              "id": 25,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQShh_t1tonVg7aIlJYf4u3U6zAWDA8PIYiw&usqp=CAU",
              "title": "Best reviewed score:2.3",
              "price": 600
            },
            {
              "id": 26,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWb38XknIdS_nU8Tw0uWNE8cNmXioM4Jaa6A&usqp=CAU",
              "title": "Best reviewed score:2.3",
              "price": 600
            },
            {
              "id": 27,
              "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xvnR3CEgZ4L-Um6ugGBS4-kfMmzzqC_Lsw&usqp=CAU",
              "title": "Best reviewed score:2.3",
              "price": 600
            }
          
      
      ];
  
    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % data.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + data.length) % data.length);
      };
    
      const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
      })

      return (
        <>
          <div className="flex justify-between px-3 mt-[-30px]">
            <h1 className="px-5 font-semibold text-[20px] font-inter">
            Top ranking
            </h1>
            <GrFormNextLink />
          </div>
    
          <div
            {...swipeHandlers}
            className="flex  overflow-hidden items-center justify-between  my-5"
          >
            <div
              className="flex px-3 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {data.map((item) => (
                <div
                  key={item.id}
                  className={` mx-2 flex-shrink-0 bg-search   rounded-[10px] items-center h-[220px] `}
                >
                  <div className="  px-2 font-bold  h-[60px] ">
                    <div className="text-[25px] text-gray-300">
                      <img className=" h-[160px]" src={item.url} />
                    </div>
                    <div className="text-[12px] mt-2 text-center">{item.title}</div>
                    <p className="text-gray-600 text-center text-[15px] font-thin capitalize">
                      moq : 1 price
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
  )
}
