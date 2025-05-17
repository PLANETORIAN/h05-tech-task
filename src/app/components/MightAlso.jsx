import Image from "next/image"

function MightAlso() {
  return (
    <div>
    
         
    
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">YOU MIGHT ALSO LIKE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            name: "Polo with Contrast Trims",
            rating: 4.0,
            price: 212,
            originalPrice: 242,
            discount: "20%",
            image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747511053/Polo_with_contrast_trims_nzka2i.png"  // Update with your actual image paths
          },
          {
            name: "Gradient Graphic T-shirt",
            rating: 3.5,
            price: 145,
            originalPrice: 145,
            image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747511053/Gradient_graphic_tshirt_fmorma.png"
          },
          {
            name: "Polo with Tipping Details",
            rating: 4.5,
            price: 180,
            originalPrice: 180,
            image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747511053/Polo_with_tripping_details_ri0qak.png"
          },
          {
            name: "Black Striped T-shirt",
            rating: 5.0,
            price: 120,
            originalPrice: 150,
            discount: "30%",
            image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747511052/Black_striped_tshirt_rxp47e.png"
          }
        ].map((product, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-50 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-medium mb-1">{product.name}</h3>
            <div className="flex items-center gap-1 text-sm">
              <div className="flex text-yellow-400">
                {"★".repeat(Math.floor(product.rating))}
                {product.rating % 1 !== 0 && "½"}
                {"☆".repeat(5 - Math.ceil(product.rating))}
              </div>
              <span className="text-gray-600">{product.rating}/5</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold">₹{product.price}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="text-red-500">-{product.discount}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default MightAlso