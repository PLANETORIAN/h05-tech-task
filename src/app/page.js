import Image from 'next/image';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import TopSelling from './components/TopSelling';
import Feedback from './components/Feedback';
import Browse from './components/Browse';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
   <Hero />
   <NewArrivals />
   <TopSelling />
   <Browse />
   <Feedback />
      


     

    







    </main>
  );
}
