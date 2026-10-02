import { useEffect, useRef } from 'react'

const reviews = [
  {
    name: 'Sophia R.',
    handle: '@sophiavibez',
    avatar: '🧁',
    rating: 5,
    text: "Berry Bliss literally changed my life. I drive 30 minutes just for this shake. No regrets, only calories.",
    color: '#FF4D6D',
  },
  {
    name: 'Marcus T.',
    handle: '@marcustkid',
    avatar: '🤘',
    rating: 5,
    text: "Dark Obsession is dangerously good. My go-to every single Friday. The staff at VibeShake are amazing too.",
    color: '#3A0CA3',
  },
  {
    name: 'Priya M.',
    handle: '@priyashakes',
    avatar: '🌸',
    rating: 5,
    text: "Mango Fever during summer hits different. Refreshing, thick, and actually tastes like real mango. Love it!",
    color: '#FFD60A',
  },
]

export default function Testimonials() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'var(--sugar-white)' }}
    >
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: 60, marginTop: -1 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="var(--grape-riot)" />
        </svg>
      </div>

      {/* Bg decoration blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500,
          top: '10%', right: '-10%',
          background: 'var(--lilac-mist)',
          opacity: 0.08,
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(58,12,163,0.08)', color: 'var(--grape-riot)' }}
          >
            Happy Vibers
          </span>
          <h2
            className="font-fredoka leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--grape-riot)' }}
          >
            What People Are{' '}
            <span style={{ color: 'var(--neon-coral)' }}>Saying</span>
          </h2>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={rev.name}
              ref={(el) => (cardRefs.current[i] = el)}
              className="testimonial-card reveal rounded-3xl p-8"
              style={{
                background: 'white',
                boxShadow: '0 6px 30px rgba(58,12,163,0.07)',
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              {/* Stars */}
              <div className="flex text-yellow-400 text-lg mb-4">
                {'★'.repeat(rev.rating)}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-base leading-relaxed mb-6 italic">
                "{rev.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${rev.color}18` }}
                >
                  {rev.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: 'var(--midnight-berry)' }}>{rev.name}</div>
                  <div className="text-gray-400 text-xs">{rev.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
