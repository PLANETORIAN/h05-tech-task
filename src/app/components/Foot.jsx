import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 text-gray-800 pt-48 mt-20">

      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl -mt-20 px-4 z-10">
      <div className="bg-black text-white px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl">
  <h2 className="uppercase font-[700] text-3xl sm:text-4xl leading-tight text-center sm:text-left"
      style={{ fontFamily: 'var(--font-integral-cf)' }}>
    STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
  </h2>
  <form className="flex flex-col gap-3 w-full sm:w-auto font-satoshi">
  <div className="relative">
    <input
      type="email"
      placeholder="Enter your email address"
      className="rounded-full px-4 py-2 pl-10 text-black bg-white outline-none w-full sm:w-72"
    />
    <div className="absolute left-3 top-1/2 -translate-y-1/2">
      <Image 
        src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747516004/Mail_h8jnbq.svg"
        alt="Email"
        width={20}
        height={20}
      />
    </div>
  </div>
  <button
    type="submit"
    className="rounded-full bg-white text-black font-semibold px-5 py-2 text-sm whitespace-nowrap w-full sm:w-auto"
  >
    Subscribe to Newsletter
  </button>
</form>


        </div>
      </div>

    
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 font-satoshi">
   
        <div className="col-span-2 md:col-span-1">
    <h3 className="text-xl font-[800] mb-3" style={{ fontFamily: 'var(--font-integral-cf)' }}>
      SHOP.CO
    </h3>
          <p className="text-sm max-w-xs text-gray-600">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex gap-3 mt-4">
            <Image 
              src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747508991/Social_ysjihz.svg"
              alt="Social Media Links"
              width={120}
              height={24}
              className="object-contain"
            />
          </div>
        </div>

      
        <div>
          <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Features</a></li>
            <li><a href="#" className="hover:text-gray-900">Works</a></li>
            <li><a href="#" className="hover:text-gray-900">Career</a></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">Help</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Customer Support</a></li>
            <li><a href="#" className="hover:text-gray-900">Delivery Details</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
          </ul>
        </div>

 
        <div>
          <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">FAQ</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Account</a></li>
            <li><a href="#" className="hover:text-gray-900">Manage Deliveries</a></li>
            <li><a href="#" className="hover:text-gray-900">Orders</a></li>
            <li><a href="#" className="hover:text-gray-900">Payments</a></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Free eBooks</a></li>
            <li><a href="#" className="hover:text-gray-900">Development Tutorial</a></li>
            <li><a href="#" className="hover:text-gray-900">How to - Blog</a></li>
            <li><a href="#" className="hover:text-gray-900">YouTube Playlist</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex gap-3 mt-4 sm:mt-0">
          <Image src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747508990/Visa_t3xl9b.svg" alt="Visa" width={56} height={20} />
          <Image src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747508990/Mastercard_jquls1.svg" alt="Mastercard" width={56} height={20} />
          <Image src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747508990/Paypal_q90vmo.svg" alt="PayPal" width={56} height={20} />
          <Image src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747508990/Apple_er43wk.svg" alt="Apple Pay" width={56} height={20} />
          <Image src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747508990/Google_xxqykd.svg" alt="Google Pay" width={56} height={20} />
        </div>
      </div>
    </footer>
  );
}
