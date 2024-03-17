import { Link } from "react-router-dom"


export default function Catogery() {
    const catogiry =[
        {id:1,name:"women clothes",href:"/clothes"},
        {id:2,name:"women shoes",href:"/shoes"},
        {id:3,name:"women bags",href:"/bags"},
        {id:4,name:"women jewelery",href:"/"},
        {id:5,name:"health beauty && meke up",href:"/"},
        {id:3,name:"women bags",href:"/bags"},
        {id:4,name:"women jewelery",href:"/"},
       
        
    ]
  return (
    <div className="font-roboto mt-5">
        {catogiry.map(cat=>(
          <div key={cat.id} className="my-3 font-roboto text-gray-800 capitalize font-light hover:text-oranged">
            <Link to={cat.href} >{cat.name}</Link>
          </div>
        ))}
      </div>
  )
}
