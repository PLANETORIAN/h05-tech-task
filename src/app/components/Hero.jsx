import Image from 'next/image';

function Hero() {
  return (
    <div>
      <section className="relative flex flex-col bg-[#F2F0F1] md:flex-row items-center justify-between px-6 md:px-18 w-full mx-auto gap-8 overflow-hidden">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left relative z-10">
        

<h1
  className="
    text-3xl
    leading-tight
    mb-4
    font-integral
    font-[700]        /* using heavy weight of IntegralCF */
    md:text-3xl
    lg:text-4xl
    xl:text-5xl
  "
  style={{ fontFamily: 'var(--font-integral-cf)' }}
>
  FIND CLOTHES<br />THAT MATCHES <br /> YOUR STYLE
</h1>

<p
  className="
    text-sm           /* base paragraph smaller */
    text-gray-600
    font-satoshi      /* changed to Satoshi */
    mb-6
    max-w-xs          /* narrower on mobile */
    mx-auto           /* center on mobile */
    md:max-w-md
    md:mx-0
    md:text-sm        /* md paragraph */
    lg:text-base
    xl:text-lg
  "
>
  Browse through our diverse range of meticulously crafted garments,
  designed to bring out your individuality and cater to your sense of style.
</p>

{/* Button - updated to Satoshi */}
<button
  className="
    bg-black
    text-white
    rounded-full
    font-satoshi      /* changed to Satoshi */
    font-medium
    px-6 py-3
    text-base
    block
    w-full
    mx-auto
    md:inline-block
    md:w-auto
    md:px-4 md:py-1.5
    md:text-[12px]
    lg:px-6 lg:py-2
    lg:text-base
  "
>
  Shop Now
</button>

{/* Metrics - updated to Satoshi */}
<div
  className="
    flex
    flex-wrap md:flex-nowrap
    flex-row
    items-center
    justify-center md:justify-start
    mt-8
    gap-4
    text-[12px]
    font-satoshi      /* changed to Satoshi */
    divide-x md:divide-y-0
    md:divide-x
    divide-gray-300
    text-center md:text-left
  "
>

  <div className="pr-4 py-2 md:py-0">
    <p className="font-bold text-[28px] sm:text-[24px] md:text-[26px] lg:text-[28px]">
      200+
    </p>
    <p className="text-gray-500 text-[12px] sm:text-[10px] md:text-[12px] lg:text-[14px]">
      International Brands
    </p>
  </div>

  <div className="pr-4 py-2 md:py-0">
    <p className="font-bold text-[28px] sm:text-[24px] md:text-[26px] lg:text-[28px]">
      2,000+
    </p>
    <p className="text-gray-500 text-[12px] sm:text-[10px] md:text-[12px] lg:text-[14px]">
      High-Quality Products
    </p>
  </div>

  <div className="pr-4 py-2 md:py-0">
    <p className="font-bold text-[28px] sm:text-[24px] md:text-[26px] lg:text-[28px]">
      30,000+
    </p>
    <p className="text-gray-500 text-[12px] sm:text-[10px] md:text-[12px] lg:text-[14px]">
      Happy Customers
    </p>
  </div>
</div>

        </div>

        {/* Right Image */}
        <div
  className="
    relative 
    w-full
    h-[280px]

    sm:h-[380px]

    [@media(min-width:375px)]:max-w-[320px]
    [@media(min-width:425px)]:max-w-[360px]
    [@media(min-width:500px)]:max-w-[400px]
    [@media(min-width:600px)]:max-w-[420px]

    md:w-[420px] md:h-[420px]
    lg:w-[480px] lg:h-[480px]
    xl:w-[525px] xl:h-[583px]

    overflow-hidden
    z-10
    mx-auto
    md:mx-0 md:mb-0
  "
>
  {/* Hero Image */}
  <Image
    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384896/Landing_page_ym3qgr.jpg"
    alt="Landing Page"
    fill
    className="object-cover object-top"
    priority
    sizes="(max-width: 768px) 100vw, 525px"
  />

  {/* Decorative Stars */}
  <Image
    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384892/Star_lk1fur.svg"
    alt="Star Decoration"
    width={55}
    height={55}
    className="absolute right-[0%] top-[20%] z-20"
  />
  <Image
    src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384892/Star_lk1fur.svg"
    alt="Star Decoration"
    width={35}
    height={35}
    className="absolute right-[90%] top-[50%] z-20"
  />
</div>


      </section>

      {/* Brand Logos */}
      <div className="bg-black text-white py-6">
  <div className="flex flex-wrap justify-around items-center gap-8 text-base sm:text-lg font-semibold">
    {[
      ['Versace', 'Versace_l1hbo8.png'],
      ['Zara', 'Zara_afez21.png'],
      ['Gucci', 'Gucci_hkmw42.png'],
      ['Prada', 'Prada_szqhpk.png'],
      ['Calvin Klein', 'Calvin_Klein_pcxpdz.png'],
    ].map(([alt, img]) => (
      <div
        key={alt}
        className={`relative w-20 sm:w-24 md:w-28 lg:w-32 h-10`}
      >
        <Image
          src={`https://res.cloudinary.com/dbdkg7fik/image/upload/v1747384891/${img}`}
          alt={alt}
          fill
          className="object-contain"
          priority
        />
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Hero;
