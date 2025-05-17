import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="w-full">
      {/* Top Banner */}
      
<div className="relative bg-black text-white text-xs md:text-sm px-4 py-2 text-center font-satoshi">
  <button className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2">
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
  <a href="#" className="underline font-medium">
    Sign Up Now
  </a>
</div>



      {/* Navbar */}
      <div className="w-full bg-white shadow-sm">
        <nav className="flex items-center justify-between px-4 md:px-6 py-3 gap-6 w-full">
          {/* Hamburger Placeholder (visible on mobile) */}
         {/* Hamburger Placeholder (visible on mobile) */}
{/* Hamburger Placeholder (visible on mobile) */}

<div className="flex items-center gap-4">
    {/* Hamburger Menu */}
    <div className="md:hidden relative w-6 h-6 flex-shrink-0">
      <Image
        src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747470477/Hamburger_uhxcxo.svg"
        alt="Menu"
        fill
        sizes="24px"
        className="object-contain cursor-pointer"
        priority
      />
    </div>
  
</div>
{/* Logo */}
<div className="text-2xl font-[700] flex-shrink-0 font-integral"
  style={{ fontFamily: 'var(--font-integral-cf)' }}>
  SHOP.CO
</div>

{/* Navigation Links - Updated to use Satoshi */}
<div className="hidden md:flex gap-6 text-sm font-medium items-center font-satoshi">
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

{/* Search Bar - Updated to use Satoshi */}
<div className="hidden md:flex-grow md:block md:max-w-xl relative mr-0">
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
    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-700 placeholder:text-gray-500 focus:outline-none font-satoshi"
  />
</div>


{/* Cart & Profile Icons */}
{/* Cart & Profile Icons */}
{/* Cart & Profile Icons */}
<div className="flex gap-4 items-center  md:pr-10 flex-shrink-0">
  {/* Search Icon (visible only on mobile) */}
  <div className="block md:hidden relative w-6 h-6 flex-shrink-0">
    <Image
      src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747470810/Search_small_yqgbe2.svg"
      alt="Search"
      fill
      sizes="24px"
      className="object-contain cursor-pointer"
      priority
    />
  </div>

  {/* Cart Icon */}
  <div className="relative w-6 h-6 flex-shrink-0">
    <Image
      src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384892/Cart_po01hj.svg"
      alt="Cart"
      fill
      sizes="24px"
      className="object-contain cursor-pointer"
      priority
    />
  </div>

  {/* Profile Icon */}
  <div className="relative w-6 h-6 flex-shrink-0">
    <Image
      src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384892/Profile_joi4oh.svg"
      alt="Profile"
      fill
      sizes="24px"
      className="object-contain cursor-pointer"
      priority
    />
  </div>
</div>
  {/* ...rest of the icons... */}
        </nav>
      </div>
    </div>
  );
}
