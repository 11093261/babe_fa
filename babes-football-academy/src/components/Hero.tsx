// components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 text-center">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Babes Football Academy</h1>
        <p className="text-xl md:text-2xl mb-8">Where young talents become champions</p>
        <Link
          href="/contact"
          className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
        >
          Join Now
        </Link>
      </div>
    </section>
  );
}