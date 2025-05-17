import Image from 'next/image';
import Product from '../components/Product';
import Review from '../components/Review';
import MightAlso from '../components/MightAlso';

export default function ProductPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white border-t border-gray-200">
      <Product />

      <Review />    
 <MightAlso />
    </main>
  );
}
