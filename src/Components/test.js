//  const image =[
// img1,img2,img3
//  ]
//  const [currentImag , setCurrentImage] =useState(0)
//  const nextImage = ()=>{
//   setCurrentImage((prevImage)=>(prevImage+1)%image.length)
//  }
//  const prevImage = ()=>{
//   setCurrentImage((prevImage)=>(prevImage-1+image.length)%image.length)
//  }
//  useEffect(()=>{
// const intervalId =setInterval(nextImage,3000)
// return ()=>clearInterval(intervalId)
//  },[currentImag])


// 

// const content = "aaaa"
// const content2 = 'bbbb'
// const [text, setText] = useState(content);

// const [isVisible, setIsVisible] = useState(true);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setText((prevText) => {
//       return prevText === content ? content2 : content;
//     });
//     setIsVisible((prevVisible) => prevVisible);
//   }, 2000);

//   return () => clearInterval(interval);
// }, []);
// 
// const description =[
//     "Discounts on more than 300 thousand products",
//     "An additional 20% discount on orders of more than 1800EG",
//     "get a 15% discount when purchasing for 1500EG",
//     "Buy one piece and get the other for half the warranty"
//   ]
  
  
  
  
//   function Home() {
//   const [current,setCurrent]=useState(0)
//   const prevDesc =()=>{
//     setCurrent((prev)=>(prev+1 )%description.length)
//   }
//   useEffect(()=>{
//     const intervalId =setInterval(prevDesc,5000)
//     return ()=>clearInterval(intervalId)
//      },[current])
  
{/* <div className="w-full m-auto h-full">
<Logo/>
<Titls/>
<div className="w-full m-auto h-[600px] relative">

  <img src={img1} className="w-full" />
  <div className="absolute font-crimson text-yellow-100  left-[800px] top-[230px] text-[38px] flex justify-center items-center">
  {description[current]}
    </div>
  </div>
  {/* <Seal /> */}

// </div> 
//\
// / export default function Navbar() {
  //   const location = useLocation();
  
  //   return (
  //     <div className="w-full h-70px flex justify-around items-center py-5 m-auto">
  //       {/*  */}
  //       <div className="flex justify-around w-4/6">
  //         <h1 className="font-birthstone hover:px-5 ml-[-80px] text-red-400 xl:text-[50px] text-[30px]">
  //           shopingoo
  //         </h1>
  
  //         <nav className=" w-3/6 py-6 xl:text-[20px]   text-[18px] capitalize text-gray-800 lg:block hidden">
  //           <ul className="flex flex-row justify-between items-center">
  //             <li
  //               className={`relative ${
  //                 location.pathname === "/" ? "border-b-2 border-red-400" : ""
  //               }`}
  //             >
  //               {" "}
  //               <Link to="/" className="hover:text-red-400">
  //                 home
  //               </Link>
  //             </li>
  
  //             <li
  //               className={`relative ${
  //                 location.pathname === "/about"
  //                   ? "border-b-2 border-red-400"
  //                   : ""
  //               }`}
  //             >
  //               {" "}
  //               <Link to="/about" className="hover:text-red-400">
  //                 about
  //               </Link>
  //             </li>
  
  //             <li
  //               className={`relative ${
  //                 location.pathname === "/content"
  //                   ? "border-b-2 border-red-400"
  //                   : ""
  //               }`}
  //             >
  //               {" "}
  //               <Link to="/content" className="hover:text-red-400">
  //                 contact
  //               </Link>
  //             </li>
  
  //             <li
  //               className={`relative ${
  //                 location.pathname === "/sign" ? "border-b-2 border-red-400" : ""
  //               }`}
  //             >
  //               {" "}
  //               <Link to="/sign" className="hover:text-red-400">
  //                 sign up
  //               </Link>
  //             </li>
  //           </ul>
  //         </nav>
  //       </div>
  //       {/*  */}
  
  //       <div className="flex justify-around gap-5 ">
  //         <div className="relative">
  //           <input
  //             type="search"
  //             className=" p-2 bg-gray-50 border-none focus:outline-none rounded-[25px] "
  //             placeholder="search"
  //           />
  //           <SearchOutlined className="absolute right-2 top-2" />
  //         </div>
  
  //         <Link to="/cart" className="p-2 bg-gray-600">
  //           <ShoppingCart className="text-red-400" />
  //         </Link>
  
  //         <Link className="p-2 bg-gray-600">
  //           <NotificationsNone className="text-red-400" />
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }
