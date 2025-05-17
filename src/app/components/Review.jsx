import Image from "next/image"

function Review() {
  return (
    <div><div className="mt-16">
    <div className="flex justify-between items-center mb-8">
      <div className="flex gap-8">
        <button className="text-gray-400">Product Details</button>
        <button className="font-medium border-b-2 border-black">Rating & Reviews</button>
        <button className="text-gray-400">FAQs</button>
      </div>
      
<div className="flex gap-4">
<button className="p-2 border rounded-full">
<Image 
  src="https://res.cloudinary.com/dbdkg7fik/image/upload/v1747511246/Sort_ru4nqd.svg"
  alt="Sort"
  width={24}
  height={24}
/>
</button>
<select className="border rounded-full px-4 py-2 bg-white">
<option>Latest</option>
<option>Oldest</option>
<option>Highest Rating</option>
<option>Lowest Rating</option>
</select>
<button className="px-4 py-2 bg-black text-white rounded-full">Write a Review</button>
</div>

    </div>

    {/* Reviews List */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{[
{
  name: "Samantha D.",
  verified: true,
  rating: 4.5,
  date: "Posted on August 14, 2023",
  comment: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt!"
},
{
  name: "Alex M.",
  verified: true,
  rating: 4,
  date: "Posted on August 15, 2023",
  comment: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
},
{
  name: "Ethan R.",
  verified: true,
  rating: 4.5,
  date: "Posted on August 16, 2023",
  comment: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt."
},
{
  name: "Olivia P.",
  verified: true,
  rating: 4,
  date: "Posted on August 17, 2023",
  comment: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out."
},
{
  name: "Liam K.",
  verified: true,
  rating: 5,
  date: "Posted on August 18, 2023",
  comment: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion."
},
{
  name: "Ava H.",
  verified: true,
  rating: 4.5,
  date: "Posted on August 19, 2023",
  comment: "I'm not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
},
].map((review, index) => (
<div key={index} className="p-6 rounded-lg border border-black/10 bg-white relative">

  <div className="flex justify-between items-start">
    <div>
      <div className="flex items-center gap-2">
        <span className="font-semibold">{review.name}</span>
        {review.verified && (
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <div className="flex items-center text-yellow-400 mt-1">
        {"★".repeat(Math.floor(review.rating))}
        {review.rating % 1 !== 0 && <span>½</span>}
        {"☆".repeat(5 - Math.ceil(review.rating))}
      </div>
    </div>
    <button className="text-gray-400 hover:bg-gray-100 p-1 rounded-full">•••</button>
  </div>
  <p className="mt-4 text-gray-700">{review.comment}</p>
  <p className="mt-2 text-sm text-gray-400">{review.date}</p>
</div>
))}
</div>






<div className="flex justify-center">
<button className="mt-8 px-10 py-2 border border-black/10 rounded-full text-gray-600 hover:bg-gray-50">
Load More Reviews
</button>
</div>




  </div></div>
  )
}

export default Review