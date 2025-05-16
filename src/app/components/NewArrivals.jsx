import Image from 'next/image'; 

const newArrivals = [
    {
      name: "T-shirt with Tape Details", 
      image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399687/Tshirt_with_tape_bbc91l.png",
      rating: 4.5,
      price: 120,
    },
    {
      name: "Skinny Fit Jeans",
      image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399691/Skinny_fit_jeans_vqr6pi.png",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discount: "20%",
    },
    {
      name: "Checkered Shirt",
      image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399694/Checkered_shirt_bsfnd0.png",
      rating: 4.5,
      price: 180,
    },
    {
      name: "Sleeve Striped T-shirt",
      image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399687/Sleeve_striped_tshirt_mam482.png",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: "30%",
    },
  ];

function NewArrivals() {
  return (
    <section className="py-12 px-4 border-b border-[rgba(0,0,0,0.1)] m-10">
  <h2 className="text-3xl font-bold text-center mb-8">
    <span className="inline-block pb-1">NEW ARRIVALS</span>
  </h2>

  <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
    {newArrivals.map((item, i) => (
      <div
        key={i}
        className="bg-[#f9f7f6] rounded-xl p-4 md:p-6 w-[16rem] md:w-[18rem] text-center shadow-md"
      >
        <div className="relative h-60 md:h-72 mb-4">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
        <p className="font-medium text-gray-800 mb-2">{item.name}</p>
        <div className="flex justify-center items-center gap-1 text-yellow-500 text-sm">
          {"★".repeat(Math.floor(item.rating))}
          {"☆".repeat(5 - Math.floor(item.rating))}
          <span className="text-gray-600 text-sm ml-1">{item.rating}/5</span>
        </div>
        <div className="mt-2 text-lg font-semibold">
          ${item.price}
          {item.originalPrice && (
            <>
              <span className="text-gray-400 line-through text-sm ml-2">
                ${item.originalPrice}
              </span>
              <span className="text-red-500 text-sm ml-2">
                -{item.discount}
              </span>
            </>
          )}
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-12">
    <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition">
      View All
    </button>
  </div>
</section>




  )
}

export default NewArrivals