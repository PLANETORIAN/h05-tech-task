import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Top subscription banner */}
      <div className="px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black text-white px-6 py-6 sm:px-10 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg">
            <h2 className="uppercase font-extrabold text-xl sm:text-2xl leading-tight text-center sm:text-left">
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h2>
            <form className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-full px-4 py-2 w-full sm:w-64 text-black bg-white outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-white text-black font-semibold px-4 py-2 whitespace-nowrap text-sm"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo & description */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xl font-bold mb-3">SHOP.CO</h3>
          <p className="text-sm max-w-xs text-gray-600">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Twitter" className="bg-white rounded-full p-1 shadow hover:scale-105 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="bg-white rounded-full p-1 shadow hover:scale-105 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="bg-white rounded-full p-1 shadow hover:scale-105 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="bg-white rounded-full p-1 shadow hover:scale-105 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">COMPANY</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Features</a></li>
            <li><a href="#" className="hover:text-gray-900">Works</a></li>
            <li><a href="#" className="hover:text-gray-900">Career</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">HELP</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Customer Support</a></li>
            <li><a href="#" className="hover:text-gray-900">Delivery Details</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">FAQ</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Account</a></li>
            <li><a href="#" className="hover:text-gray-900">Manage Deliveries</a></li>
            <li><a href="#" className="hover:text-gray-900">Orders</a></li>
            <li><a href="#" className="hover:text-gray-900">Payments</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">RESOURCES</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Free eBooks</a></li>
            <li><a href="#" className="hover:text-gray-900">Development Tutorial</a></li>
            <li><a href="#" className="hover:text-gray-900">How to - Blog</a></li>
            <li><a href="#" className="hover:text-gray-900">YouTube Playlist</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright & payment methods */}
      <div className="max-w-6xl mx-auto px-4 py-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex gap-3 mt-4 sm:mt-0">
          <Image src="/visa.svg" alt="Visa" width={36} height={20} />
          <Image src="/mastercard.svg" alt="Mastercard" width={36} height={20} />
          <Image src="/paypal.svg" alt="PayPal" width={36} height={20} />
          <Image src="/applepay.svg" alt="Apple Pay" width={36} height={20} />
          <Image src="/googlepay.svg" alt="Google Pay" width={36} height={20} />
        </div>
      </div>
    </footer>
  );
}