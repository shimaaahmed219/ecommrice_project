import cartImg from "../../image/bag/cart.png";

export default function EmptityCart() {
  return (
   
    <div className="flex flex-col items-center gap-y-6 font-roboto">
    <img src={cartImg} className="m-auto mt-[-40px] w-[200px]" />
    <h1 className="font-bold text-[20px]">
      Your shopping cart is empty.
    </h1>
    <p className="text-[20px]">
      Add products to your cart and order on shoppo to stay{" "}
    </p>
    <button className="w-[280px] text-[20px] font-roboto capitalize text-white rounded-[20px] bg-oranged h-[50px]">
      start sourcing
    </button>
  </div>
  )
}
