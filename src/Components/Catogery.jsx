import { Link } from "react-router-dom"


export default function Catogery() {
    const catogiry =[
        {id:1,name:"women clothes",href:"/clothes"},
        {id:2,name:"women shoes",href:"/shoes"},
        {id:3,name:"women bags",href:"/bags"},
        {id:4,name:"women jewelery",href:"/"},
        {id:5,name:"health beauty",href:"/"},
        {id:6,name:"meke up",href:"/"},
        {id:3,name:"women bags",href:"/bags"},
        {id:4,name:"women jewelery",href:"/"},
        {id:5,name:"health beauty",href:"/"},
        {id:6,name:"meke up",href:"/"}
    ]
  return (
    <div className="px-10 ml-[100px] py-3 text-gray-600 shadow-lg ">
        {catogiry.map(cat=>(
          <div key={cat.id} className=" p-2 text-[22px] hover:mx-2 hover:shadow-sm">
            <Link to={cat.href} >{cat.name}</Link>
          </div>
        ))}
      </div>
  )
}
