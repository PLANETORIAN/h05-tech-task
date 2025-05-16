
import Image from 'next/image'; 

function Hero() {
  return (
   <div>
     <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 max-w-7xl mx-auto gap-8">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-integral">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6 max-w-md">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
          Shop Now
        </button>

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

      <div className="flex-1 relative w-full h-[583px] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384896/Landing_page_ym3qgr.jpg"
          alt="Landing Page"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </section>

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
   </div>
  );
}

export default Hero;
