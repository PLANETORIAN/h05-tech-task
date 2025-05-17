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
    <section className="py-12 border-b border-[rgba(0,0,0,0.1)] m-10">
      <h2 className="text-3xl font-[700] text-center mb-8">
        <span className="inline-block pb-1"
        style={{ fontFamily: 'var(--font-integral-cf)' }}>NEW ARRIVALS</span>
      </h2>

      <div className="flex justify-center gap-4 md:gap-6">
        {newArrivals.map((item, i) => (
          <div
            key={i}
            className={`
              bg-[#ffffff] rounded-xl p-0
              w-[140px] sm:w-[160px] md:w-[200px] lg:w-[280px] 
              ${i >= 2 ? 'hidden sm:block' : ''}  /* Show only 2 cards on mobile */
              ${i >= 3 ? 'sm:hidden md:block' : ''} /* Show 3 cards on sm */
              text-left font-satoshi
            `}
          >
            <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 mb-2 md:mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <p className="font-medium text-gray-800 mb-1 md:mb-2 text-sm md:text-base truncate">
              {item.name}
            </p>
            
<div className="flex items-center gap-1 text-xs md:text-sm">
  <div className="flex">
    {[...Array(5)].map((_, index) => {
      const starValue = index + 1;
      if (starValue <= Math.floor(item.rating)) {
        return (
          <Image
            key={index}
            src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747512289/Star_review_zxf9fb.svg"
            alt="full star"
            width={16}
            height={16}
          />
        );
      } else if (starValue - 0.5 === item.rating) {
        return (
          <Image
            key={index}
            src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747512289/Half_star_review_ktmtyn.svg"
            alt="half star"
            width={8}
            height={8}
          />
        );
    }
    })}
  </div>
  <span className="text-gray-600 ml-1">
    {item.rating}/5
  </span>
</div>
<div className="mt-1 md:mt-2 text-base md:text-lg font-semibold">
  ${item.price}
  {item.originalPrice && (
    <>
      <span className="text-gray-400 line-through text-xs md:text-sm ml-1 md:ml-2">
        ${item.originalPrice}
      </span>
      <span className="text-red-500 text-xs md:text-sm ml-1 md:ml-2 bg-red-50 px-1.5 py-0.5 rounded-full">
        -{item.discount}
      </span>
    </>
  )}
</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 md:mt-12">
        <button className="border border-gray-300 px-4 md:px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm md:text-base">
          View All
        </button>
      </div>
    </section>
  );
}
export default NewArrivals