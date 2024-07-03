export default function Footer() {
  return (
    <div className="w-full h-full py-10 px-5 bg-bb  ">
      <div className="grid grid-cols-5 items-center justify-center  ">
        <div className="gap-y-4 grid m-auto font-roboto  " > 
          <h1 className="font-bold text-header">Get support</h1>
          <h6>Help Center</h6>
          <h6>Live chat</h6>
          <h6>Check order status</h6>
          <h6>Refunds</h6>
          <h6>Report abuse</h6>
        </div>
        <div className="gap-y-4 grid m-auto">
          <h1 className="font-bold text-header"> Trade Assurance</h1>
          <h6>Safe and easy payments</h6>
          <h6>Money-back policy</h6>
          <h6>On-time shipping</h6>
          <h6>After-sales protections</h6>
          <h6>Product monitoring services</h6>
        </div>
        <div className="gap-y-4 grid m-auto">
          <h1 className="font-bold text-header">Source on shoppo.com</h1>
          <h6>Request for Quotation</h6>
          <h6>Membership program</h6>
          <h6>shoppo.com Logistics</h6>
          <h6>Sales tax and VAT</h6>
          <h6>shoppo.com Reads</h6>
        </div>
        <div className="gap-y-4 grid m-auto">
          <h1 className="font-bold text-header"> Sell on shoppo.com</h1>
          <h6>Start selling</h6>
          <h6>Seller Central</h6>
          <h6>Become a Verified Supplier</h6>
          <h6>Partnerships</h6>
          <h6>Download the app for suppliers</h6>
        </div>
        <div className="gap-y-4 grid m-auto mt-[-1px]">
          <h1 className="font-bold text-header">Get to know us</h1>
          <h6 className="text-oranged cursor-pointer">About shoppo.com</h6>
          <h6>Corporate responsibility</h6>
          <h6>News center</h6>
          <h6>Careers</h6>
        </div>
      </div>
    </div>
  );
}
