'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "IMS Games delivered beyond expectations. Their technical prowess combined with genuine creative vision resulted in a game that not only performed flawlessly but told a story that resonated with millions of players.",
      name: "Sarah Chen",
      role: "Creative Director, Nexus Studios",
      image: "/images/testimonial-industry-recognition-0-1766186003880.jpg",
      rating: 5
    },
    {
      quote: "Working with IMS Games felt like partnering with a team that actually understood the craft. Every decision was thoughtful, every line of code purposeful. They don't just build games—they engineer experiences.",
      name: "Marcus Thompson",
      role: "VP of Product, Digital Horizons",
      image: "/images/testimonial-industry-recognition-1-1766186004172.jpg",
      rating: 5
    },
    {
      quote: "What sets IMS Games apart is their editorial approach to game design. They treat each project as a narrative to be told through technology. The result? A product that exceeded our KPIs while earning genuine player loyalty.",
      name: "Elena Rodriguez",
      role: "CEO, Catalyst Interactive",
      image: "/images/testimonial-industry-recognition-2-1766186004440.jpg",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-50 p-10 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary-500 text-primary-500"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-gray-600 leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}