import Image from 'next/image';

const newArrivals = [
  {
    name: "T-shirt with Tape Details", // ✅ Changed 'Name' to 'name'
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

const testimonials = [
  {
    name: "Sarah M.",
    quote:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Alex K.",
    quote:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5,
  },
  {
    name: "James L.",
    quote:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
];



export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F2F0F1]">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8  max-w-7xl mx-auto gap-8">
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6 max-w-md">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
            Shop Now
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 text-sm md:text-base">
            <div>
              <p className="font-bold text-lg">200+</p>
              <p className="text-gray-500">International Brands</p>
            </div>
            <div>
              <p className="font-bold text-lg">2,000+</p>
              <p className="text-gray-500">High-Quality Products</p>
            </div>
            <div>
              <p className="font-bold text-lg">30,000+</p>
              <p className="text-gray-500">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative w-full h-[600px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384896/Landing_page_ym3qgr.jpg" // upload your screenshot to Cloudinary
            alt="Landing Page"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* Brand Logos */}
      <div className="bg-black text-white py-6">
      <div className="flex flex-wrap justify-around items-center gap-8 text-lg font-semibold">
  <Image
    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384891/Versace_l1hbo8.png"
    alt="Versace"
    width={100}
    height={40}
    className="object-contain"
    priority
  />
  <Image
    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384891/Zara_afez21.png"
    alt="Zara"
    width={100}
    height={40}
    className="object-contain"
    priority
  />
  <Image
    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384891/Gucci_hkmw42.png"
    alt="Gucci"
    width={100}
    height={40}
    className="object-contain"
    priority
  />
  <Image
    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384891/Prada_szqhpk.png"
    alt="Prada"
    width={100}
    height={40}
    className="object-contain"
    priority
  />
  <Image
    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384891/Calvin_Klein_pcxpdz.png"
    alt="Calvin Klein"
    width={120}
    height={40}
    className="object-contain"
    priority
  />
</div>
      </div>


      <section className="py-12 px-4 border-b border-[rgba(0,0,0,0.1)] m-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className=" inline-block pb-1">
          NEW ARRIVALS
        </span>
      </h2>
      <div className="flex flex-wrap justify-around gap-8">
        {newArrivals.map((item, i) => (
          <div
            key={i}
            className="bg-[#f9f7f6] rounded-xl p-4 w-72 text-center shadow-sm"
          >
            <div className="relative h-60 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-gray-800 mb-1">{item.name}</p>
            <div className="flex justify-center items-center gap-1 text-yellow-500 text-sm">
              {"★".repeat(Math.floor(item.rating))}
              {"☆".repeat(5 - Math.floor(item.rating))}
              <span className="text-gray-600 text-sm ml-1">
                {item.rating}/5
              </span>
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
      <div className="flex justify-center mt-10">
        <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition">
          View All
        </button>
      </div>
    </section>

    <section className="py-12 px-4  m-10">
  <h2 className="text-3xl font-bold text-center mb-8">
    <span className="inline-block pb-1">TOP SELLING</span>
  </h2>
  <div className="flex flex-wrap justify-around gap-8">
    {topSelling.map((item, i) => (
      <div
        key={i}
        className="bg-[#f9f7f6] rounded-xl p-4 w-72 text-center shadow-sm"
      >
        <div className="relative h-60 mb-4">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
        <p className="font-medium text-gray-800 mb-1">{item.name}</p>
        <div className="flex justify-center items-center gap-1 text-yellow-500 text-sm">
          {"★".repeat(Math.floor(item.rating))}
          {"☆".repeat(5 - Math.floor(item.rating))}
          <span className="text-gray-600 text-sm ml-1">
            {item.rating}/5
          </span>
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
  <div className="flex justify-center mt-10">
    <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition">
      View All
    </button>
  </div>
</section>


<section className="max-w-7xl mx-auto px-6 py-16 relative">
  <h2 className="text-3xl md:text-4xl font-bold mb-10">OUR HAPPY CUSTOMERS</h2>

  {/* Scrollable cards container */}
  <div className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pr-12">
    {testimonials.map((t, i) => (
      <div
        key={i}
        className="min-w-[300px] max-w-sm bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
      >
        <div className="flex text-yellow-400 mb-3">
          {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
        </div>
        <div className="flex items-center font-semibold mb-2">
          {t.name}
          <div className="w-4 h-4 bg-green-500 rounded-full ml-2"></div>
        </div>
        <p className="text-gray-600 text-sm">"{t.quote}"</p>
      </div>
    ))}
  </div>

  {/* Arrows container positioned relative to the section */}
  <div className="absolute top-20  right-1 mt-2 flex items-center gap-2 pr-4">
    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
      <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
    </button>
    <button className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition">
      <div className="w-4 h-4 bg-white rounded-sm"></div>
    </button>
  </div>
</section>




    </main>
  );
}
