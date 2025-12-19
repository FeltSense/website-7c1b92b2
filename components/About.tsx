'use client'

import { Code2, Gamepad2, Users, Sparkles } from 'lucide-react'

export default function About() {
  const stats = [
    { value: '10+', label: 'Years Experience', icon: Code2 },
    { value: '25+', label: 'Games Shipped', icon: Gamepad2 },
    { value: '50+', label: 'Team Members', icon: Users },
    { value: '5M+', label: 'Players Worldwide', icon: Sparkles },
  ]

  const values = [
    {
      title: 'Technical Excellence',
      description: 'We build on proven foundations. Every line of code is written with purpose, every system designed for scale and maintainability.',
    },
    {
      title: 'Creative Vision',
      description: 'Games are experiences, not products. We pursue ideas that matter, stories that resonate, and mechanics that feel inevitable.',
    },
    {
      title: 'Editorial Craft',
      description: 'We approach game design like editorial writing—every element curated, every moment intentional, every detail considered.',
    },
  ]

  return (
    <section id="about" className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Where craft meets vision
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            IMS Games emerged from a simple conviction: exceptional games require both technical mastery and creative courage. We don't chase trends. We build experiences that endure.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded by engineers and designers who believed there was a better way, IMS Games started in a small studio with a clear mission: prove that technical excellence and creative ambition aren't opposing forces—they're multipliers.
                </p>
                <p>
                  Over a decade, we've grown from a team of five to a studio of 50+, but our principles remain unchanged. We ship when it's ready, not when it's convenient. We solve hard problems, not easy ones. We build games we'd want to play ourselves.
                </p>
                <p>
                  Today, our games have reached millions of players worldwide. But the metric that matters most to us isn't downloads—it's the depth of engagement, the conversations sparked, the memories created.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Values Card */}
          <div className="bg-primary-50 rounded-2xl p-12 lg:p-14">
            <h3 className="text-2xl font-semibold text-gray-900 mb-10">What Drives Us</h3>
            <div className="space-y-10">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-20 border-t border-gray-200">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="group">
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-primary-500 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-4xl font-semibold text-gray-900 mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-light">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Philosophy */}
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-8">
            <Sparkles className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Built to last
          </h3>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            We're not interested in making games that disappear after launch week. We build experiences that players return to, communities that thrive, and stories that stick. This takes time, discipline, and an unwavering commitment to quality. It's the only way we know how to work.
          </p>
        </div>
      </div>
    </section>
  )
}