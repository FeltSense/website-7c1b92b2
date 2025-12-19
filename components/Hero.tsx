'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Gamepad2 } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-editorial-hero-1766186013543.png"
          alt="IMS Games Studio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
        <div className="max-w-4xl">
          {/* Logo/Brand Mark */}
          <div
            className={`inline-flex items-center gap-2 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Gamepad2 className="w-6 h-6 text-primary-500" />
            <span className="text-sm font-semibold tracking-wider text-white/80 uppercase">IMS Games</span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-light leading-tight text-white mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Where technical excellence meets{' '}
            <span className="font-semibold text-primary-500">creative vision</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl lg:text-2xl font-light text-white/70 leading-relaxed mb-12 max-w-3xl transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Crafting meaningful interactive experiences through innovation, craft, and editorial storytelling. We build games that matter.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200 group"
            >
              Explore Our Games
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-colors duration-200 border border-white/10"
            >
              Learn More
            </Link>
          </div>

          {/* Stats or Trust Indicators */}
          <div
            className={`flex flex-wrap gap-8 mt-20 pt-12 border-t border-white/10 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div>
              <div className="text-3xl font-light text-white mb-1">Innovation</div>
              <div className="text-sm text-white/60">Cutting-edge technology</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-1">Craft</div>
              <div className="text-sm text-white/60">Meticulous attention to detail</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white mb-1">Story</div>
              <div className="text-sm text-white/60">Meaningful narratives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}