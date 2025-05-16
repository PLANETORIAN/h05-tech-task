import Image from "next/image";

const styles = [
  {
    label: 'Casual',
    img: 'https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399678/Casual_wjryeu.png',
  },
  {
    label: 'Formal',
    img: 'https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399678/Formal_ry1iqc.png',
  },
  {
    label: 'Party',
    img: 'https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399678/Party_hrlnqa.png',
  },
  {
    label: 'Gym',
    img: 'https://res.cloudinary.com/dbdkg7fik/image/upload/v1747399678/Gym_bl0qnd.png',
  },
];

function Browse() {
    return (
        <section className="bg-gray-100 px-10 py-10 max-w-6xl mx-auto rounded-2xl">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 font-integral">
            BROWSE BY DRESS STYLE
          </h2>
      
          <div className="grid grid-cols-12 gap-4">
            {styles.map((style, index) => {
              // Responsive column span logic
              const colSpan =
                index === 0
                  ? 'col-span-12 md:col-span-4'
                  : index === 1
                  ? 'col-span-12 md:col-span-8'
                  : index === 2
                  ? 'col-span-12 md:col-span-8'
                  : index === 3
                  ? 'col-span-12 md:col-span-4'
                  : 'col-span-6';
      
              return (
                <div
                  key={index}
                  className={`${colSpan} relative rounded-xl overflow-hidden bg-white shadow-sm group cursor-pointer`}
                >
                  <Image
                    src={style.img}
                    alt={style.label}
                    width={500}
                    height={500}
                    className="object-cover w-full h-40 md:h-52"
                  />
                  <div className="absolute top-3 left-4 bg-white/80 px-3 py-1 rounded text-black text-base font-semibold">
                    {style.label}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      );
      
}

export default Browse;