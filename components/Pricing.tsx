'use client'

import { useState } from 'react'
import { Check, Zap } from 'lucide-react'

export default function Pricing() {
  const [isLoading, setIsLoading] = useState(false)

  const handlePreOrder = async () => {
    setIsLoading(true)
    try {
      const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID
      if (!priceId) {
        alert('Stripe not configured. Please contact support.')
        setIsLoading(false)
        return
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId })
      })

      const { url, error } = await response.json()
      
      if (error) {
        alert('Payment system error. Please try again.')
        console.error(error)
        setIsLoading(false)
        return
      }

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Unable to process. Please try again.')
      setIsLoading(false)
    }
  }

  const benefits = [
    'Lifetime access to all game releases',
    'Exclusive founder\'s community access',
    'Behind-the-scenes development updates',
    'Priority support and early feature previews',
    'Special founder credits in all games'
  ]

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Reserve Your Spot
          </h2>
          <p className="text-lg text-secondary-500 font-light">
            Join the founding community. Support independent game development and gain exclusive access to our creative process.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-full shadow-md">
                <Zap className="w-4 h-4" />
                Founding Member
              </span>
            </div>

            <div className="pt-6 pb-8 border-b border-gray-200">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-semibold text-gray-900">$29</span>
                <span className="text-lg text-secondary-500 font-light">one-time</span>
              </div>
              <p className="text-center text-sm text-secondary-500">
                Limited early access pre-order
              </p>
            </div>

            <div className="py-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-primary-500" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button
                onClick={handlePreOrder}
                disabled={isLoading}
                className="block w-full py-4 px-6 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-full text-center transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {isLoading ? 'Processing...' : 'Pre-Order for $29'}
              </button>
              
              <p className="text-center text-sm text-secondary-500">
                Join 500+ founding members • Limited spots available
              </p>
              
              <p className="text-center text-xs text-gray-400">
                Secure payment powered by Stripe
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-secondary-500 font-light max-w-md mx-auto">
              Your pre-order directly funds development. No subscriptions, no hidden fees. Support independent game development with a single purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}