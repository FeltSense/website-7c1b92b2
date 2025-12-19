'use client'

import { Shield, BookOpen, Zap, Palette, Users, Award } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Development',
      description: 'Proven technical expertise delivering robust, scalable game architectures built to perform at the highest standards.',
    },
    {
      icon: BookOpen,
      title: 'Editorial Storytelling',
      description: 'Crafting narratives with editorial rigor—where every world, character, and moment carries intention and depth.',
    },
    {
      icon: Zap,
      title: 'Innovative Technology',
      description: 'Proprietary tools and cutting-edge pipelines that push boundaries while maintaining production excellence.',
    },
    {
      icon: Palette,
      title: 'Creative Identity',
      description: 'A distinctive artistic vision that defines our work—recognizable, memorable, and uncompromisingly original.',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Experienced leadership fostering an environment where technical mastery and creative ambition converge.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Credible partnerships and industry validation built on a foundation of consistent quality and innovation.',
    },
  ]

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Why Choose IMS Games
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Where technical excellence meets creative vision. We build games with precision, purpose, and a commitment to meaningful innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-lg p-8 transition-all duration-300 hover:border-primary-500 hover:shadow-md"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
            <Image
              src="/images/studio-overview-feature-1766186013896.png"
              alt="IMS Games studio workspace showcasing our development environment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
            <Image
              src="/images/games-projects-product-1766186013427.png"
              alt="IMS Games project portfolio and game development showcase"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}