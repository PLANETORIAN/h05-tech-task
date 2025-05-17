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
    <section className="max-w-7xl mx-auto px-6 py-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">OUR HAPPY CUSTOMERS</h2>

      {/* Testimonials in grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm"
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

      {/* Arrows (visual only) */}
      <div className="absolute top-20 right-4 mt-2 flex items-center gap-2 z-10">
        <button className="p-2 rounded-full bg-white hover:bg-gray-200 transition relative w-8 h-8">
          <Image
            src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747467158/Arrow_left_e8c9bn.svg"
            alt="Left Arrow"
            fill
            className="object-contain"
          />
        </button>
        <button className="p-2 rounded-full bg-white text-white hover:bg-gray-20  0 transition relative w-8 h-8">
          <Image
            src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747467157/Arrow_right_nhg6wz.svg"
            alt="Right Arrow"
            fill
            className="object-contain"
          />
        </button>
      </div>
    </section>
  );
}
