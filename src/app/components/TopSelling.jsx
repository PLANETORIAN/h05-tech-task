import Image from 'next/image'; 

const topSelling = [
    {
      name: "Vertical Striped Shirt",
      image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399687/Vertical_striped_shirt_er2mgl.png",
      rating: 5.0,
      price: 212,
      originalPrice: 232,
      discount: "20%",
    },
    {
      name: "Courage Graphic T-shirt",
      image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399682/Courage_graphic_tshirt_jmtukt.png",
      rating: 4.0,
      price: 145,
    },
    {
      name: "Loose Fit Bermuda Shorts",
      image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399688/Loose_fit_bermuda_shorts_ihlqvt.png",
      rating: 3.0,
      price: 80,
    },
    {
      name: "Faded Skinny Jeans",
      image: "https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399683/Faded_skinny_jeans_uq2yh9.png",
      rating: 4.5,
      price: 210,
    },
  ];

function TopSelling() {
  return (
    <section className="py-12 px-4 m-10">
  <h2 className="text-3xl font-bold text-center mb-8">
    <span className="inline-block pb-1">TOP SELLING</span>
  </h2>

  <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
    {topSelling.map((item, i) => (
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

export default TopSelling