import { Link } from "react-router-dom"
export default function Products() {
  return (
  <>
  <div className="absolute top-[340px] text-white w-full flex  justify-center text-center">
        <h1 className="py-2">Frequently searched:</h1>

        <div className="  justify-around flex w-[55%] m-uto">
          <Link className="px-4 py-2 rounded-[30px] border-[1px] border-white">
            iphones 15 pro max
          </Link>
          <Link className="px-4 py-2 rounded-[30px] border-[1px] border-white">
            sports shoes
          </Link>
          <Link className="px-4 py-2 rounded-[30px] border-[1px] border-white">
            lingerie
          </Link>
          <Link className="px-4 py-2 rounded-[30px] border-[1px] border-white">
            dresses women
          </Link>
          <Link className="px-4 py-2 rounded-[30px] border-[1px] border-white">
            knife
          </Link>
        </div>
      </div>
  
  </>
  )
}
