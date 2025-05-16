import Image from 'next/image'; 
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

export default function Feedback() {
  return (
    <div>
        <section className="max-w-7xl mx-auto px-6 py-16 relative">
  <h2 className="text-3xl md:text-4xl font-bold mb-10">OUR HAPPY CUSTOMERS</h2>

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
    </div>
  )
}
