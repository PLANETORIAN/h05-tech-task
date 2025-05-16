import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="relative bg-black text-white text-sm px-4 py-2 text-center">
        <button className="absolute right-4 top-1/2 -translate-y-1/2">
          <div className="w-4 h-4 relative mx-10">
            <Image
              src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384892/Cross_jceljh.svg"
              alt="Close"
              fill
              sizes="20px"
              className="object-contain"
            />
          </div>
        </button>


        Sign up and get 20% off to your first order.{' '}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </div>

      
      <div className="w-full bg-white shadow-sm">
        <nav className="flex items-center justify-between px-6 py-3 gap-6 w-full">
         <div className="text-2xl font-bold flex-shrink-0">SHOP.CO</div>

          <div className="hidden md:flex gap-6 text-sm font-medium items-center">
            <span className="flex items-center gap-1 cursor-pointer">
              Shop
              <span className="relative w-3 h-3">
                <Image
                  src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747408224/Dropdown_calyvx.svg"
                  alt="Dropdown"
                  fill
                  sizes="12px"
                  className="object-contain"
                />
              </span>
            </span>
            <span className="cursor-pointer">On Sale</span>
            <span className="cursor-pointer">New Arrivals</span>
            <span className="cursor-pointer">Brands</span>
          </div>
          <div className="flex-grow max-w-xl relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4">
              <Image
                src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747408609/Search_tbfvgw.svg"
                alt="Search"
                fill
                sizes="16px"
                className="object-contain"
              />
            </div>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-700 placeholder:text-gray-500 focus:outline-none"
            />
          </div>

         
          <div className="flex gap-4 items-center flex-shrink-0">
            <div className="w-5 h-5 relative cursor-pointer">
              <Image
                src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384892/Cart_po01hj.svg"
                alt="Cart"
                fill
                sizes="20px"
                className="object-contain"
              />
            </div>
            <div className="w-5 h-5 relative cursor-pointer">
              <Image
                src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384892/Profile_joi4oh.svg"
                alt="Profile"
                fill
                sizes="20px"
                className="object-contain"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
