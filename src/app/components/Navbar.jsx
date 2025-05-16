import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="w-full">
      {/* Top banner */}
      <div className="bg-black text-white text-sm px-4 py-2 text-center">
        Sign up and get 20% off to your first order.{" "}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </div>

      {/* Main navbar */}
      <div className="flex flex-col md:flex-row justify-around items-center px-6 py-4 bg-white shadow gap-6">
        {/* Left: Logo */}
        <div className="text-2xl font-bold">SHOP.CO</div>

        {/* Middle: Nav links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <span>Shop ⌄</span>
          <span>On Sale</span>
          <span>New Arrivals</span>
          <span>Brands</span>
        </div>

        {/* Right: Search + Icons */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Search bar */}
          <div className="relative flex-1 md:flex-none">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full md:w-[300px] bg-gray-100 rounded-full px-4 py-2 text-sm outline-none"
            />
            {/* Placeholder for search icon */}
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4 bg-gray-300 rounded" />
          </div>

          {/* ✅ Actual Cart Image */}
          <div className="w-5 h-5 relative">
            <Image
              src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384892/Cart_po01hj.svg"
              alt="Cart"
              fill
              sizes="20px"
              className="object-contain"
            />
          </div>

          {/* Placeholder for profile */}
          <div className="w-5 h-5 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
}
