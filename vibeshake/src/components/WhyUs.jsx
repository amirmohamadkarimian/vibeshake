import { useEffect, useRef } from 'react'

const reasons = [
  { icon: '🍓', title: 'Real Ingredients', desc: 'No concentrates, no shortcuts — just whole fruit and fresh dairy.' },
  { icon: '🌿', title: 'No Artificial Flavors', desc: 'What you taste is exactly what went in. Promise.' },
  { icon: '⚡', title: 'Freshly Blended', desc: 'Every shake is made to order, never sitting around waiting.' },
  { icon: '💜', title: 'Made with Love', desc: 'Each cup is crafted by someone who genuinely cares about your vibe.' },
]

export default function WhyUs() {
  const cardsRef = useRef([])

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
    cardsRef.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="py-24 px-6"
      style={{ background: 'var(--grape-riot)' }}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span
          className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          style={{ background: 'rgba(255,214,10,0.15)', color: 'var(--banana-pop)' }}
        >
          Why VibeShake
        </span>
        <h2
          className="font-fredoka text-white leading-tight"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
        >
          Why You'll Love{' '}
          <span style={{ color: 'var(--lilac-mist)' }}>Every Sip</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <div
            key={r.title}
            ref={(el) => (cardsRef.current[i] = el)}
            className="reveal why-card rounded-2xl p-7 text-center"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              transitionDelay: `${i * 0.1}s`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            >
              {r.icon}
            </div>
            <h3 className="font-fredoka text-xl text-white mb-2">{r.title}</h3>
            <p className="text-white/65 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
