'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-primary-500 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.1),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Ready to experience our craft?
        </h2>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-50 sm:text-xl">
          Explore our portfolio of interactive experiences where technical excellence meets creative storytelling. Each game is built with intention and care.
        </p>
        
        <div className="mt-10">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-600 shadow-sm transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500 sm:text-lg"
          >
            Explore Our Games
          </Link>
        </div>
      </div>
    </section>
  );
}