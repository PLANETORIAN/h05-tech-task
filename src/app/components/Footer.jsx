export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-800">
        {/* Top subscription banner */}
        <div className="bg-gray-100 py-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-black text-white px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-md">
              <h2 className="uppercase font-extrabold text-xl sm:text-2xl max-w-xs leading-tight text-center sm:text-left">
                STAY UPTO DATE <br /> ABOUT OUR LATEST OFFERS
              </h2>
              <form className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="rounded-full px-4 py-2 w-full sm:w-72 text-black bg-white outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-white text-black font-semibold px-6 py-2 whitespace-nowrap"
                >
                  Subscribe to Newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
  
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-5 gap-8">
          {/* Logo & description */}
          <div>
            <h3 className="text-2xl font-bold mb-3">SHOP.CO</h3>
            <p className="text-sm max-w-xs">
              We have clothes that suit your style and which you’re proud to wear.
              From women to men.
            </p>
            {/* Social icons placeholders */}
            <div className="flex gap-3 mt-4">
              <div className="w-6 h-6 bg-gray-300 rounded-full" />
              <div className="w-6 h-6 bg-gray-300 rounded-full" />
              <div className="w-6 h-6 bg-gray-300 rounded-full" />
              <div className="w-6 h-6 bg-gray-300 rounded-full" />
            </div>
          </div>
  
          {/* Company */}
          <div>
            <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
  
          {/* Help */}
          <div>
            <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
  
          {/* FAQ */}
          <div>
            <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">FAQ</h4>
            <ul className="space-y-2 text-sm">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
  
          {/* Resources */}
          <div>
            <h4 className="uppercase font-semibold mb-3 tracking-wider text-sm">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom copyright & payment methods */}
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
  
          {/* Payment method placeholders */}
          <div className="flex gap-3 mt-4 sm:mt-0">
            <div className="w-12 h-6 bg-gray-300 rounded" />
            <div className="w-12 h-6 bg-gray-300 rounded" />
            <div className="w-12 h-6 bg-gray-300 rounded" />
            <div className="w-12 h-6 bg-gray-300 rounded" />
            <div className="w-12 h-6 bg-gray-300 rounded" />
          </div>
        </div>
      </footer>
    );
  }
