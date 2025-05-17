import Image from "next/image"

function Product() {
  return (
    <div><div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <span>Home</span>
            <span>/</span>
            <span>Shop</span>
            <span>/</span>
            <span>Men</span>
            <span>/</span>
            <span className="text-gray-900">T-shirts</span>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Images */}
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                {/* Thumbnail Images */}
                <div className="w-20 h-20 border rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747508475/Product_main_kptfuh.png"
                    alt="T-shirt view 1"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-20 h-20 border rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747508474/Product_1_pqmfbk.png"
                    alt="T-shirt view 2"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-20 h-20 border rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747508475/Product_2_cjjhyt.png"
                    alt="T-shirt view 3"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
    
              {/* Main Image */}
              <div className="flex-1 aspect-square relative rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747508475/Product_main_kptfuh.png"
                  alt="One Life Graphic T-shirt"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
    
            {/* Right Column - Product Details */}
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {"★".repeat(4)}{"★".repeat(1)}
                </div>
                <span className="text-gray-600">4.5/5</span>
              </div>
    
              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">₹180</span>
                <span className="text-gray-500 line-through">₹300</span>
                <span className="text-red-500">-40%</span>
              </div>
    
              {/* Description */}
              <p className="text-gray-600">
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric which ensures comfort and style.
              </p>
    
              {/* Color Selection */}
              <div>
                <h3 className="font-medium mb-2">Select Colors</h3>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-olive-800 border-2 border-black cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-teal-800 cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-navy-800 cursor-pointer"></div>
                </div>
              </div>
    
             {/* Size Selection */}
    <div>
      <h3 className="font-medium mb-2">Choose Size</h3>
      <div className="flex gap-4">
        <button className="px-4 py-2 border rounded-full">Small</button>
        <button className="px-4 py-2 border rounded-full">Medium</button>
        <button className="px-4 py-2 border rounded-full bg-black text-white">Large</button>
        <button className="px-4 py-2 border rounded-full">X-Large</button>
      </div>
    </div>
    
    {/* Quantity and Add to Cart */}
    <div className="flex gap-4">
      <div className="flex items-center border rounded-full">
        <button className="px-4 py-2 text-xl">-</button>
        <span className="px-4 py-2">1</span>
        <button className="px-4 py-2 text-xl">+</button>
      </div>
      
      <button className="flex-1 bg-black text-white py-2 rounded-full">
      Add to Cart
    </button>
    </div>
            </div>
          </div></div>
  )
}

export default Product