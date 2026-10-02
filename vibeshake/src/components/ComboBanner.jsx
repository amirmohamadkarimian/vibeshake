import { useEffect, useRef } from 'react'

export default function ComboBanner() {
  const bannerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.2 }
    )
    if (bannerRef.current) observer.observe(bannerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="combo" className="relative overflow-hidden py-24" style={{ background: 'var(--sugar-white)' }}>
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: 60, marginTop: -1 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="var(--sugar-white)" />
        </svg>
      </div>

      <div
        className="relative max-w-7xl mx-auto mx-6 md:mx-auto rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--neon-coral) 0%, #ff2d55 100%)',
          margin: '0 24px',
        }}
      >
        {/* Decorative blobs inside */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 300, height: 300,
            top: '-80px', left: '-60px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 200, height: 200,
            bottom: '-50px', right: '30%',
            background: 'rgba(255,214,10,0.2)',
            borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%',
          }}
        />

        <div
          ref={bannerRef}
          className="reveal relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-10 py-14"
        >
          {/* Left text */}
          <div>
            <span
              className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
            >
              🔥 Limited Offer
            </span>
            <h2
              className="font-fredoka text-white leading-tight mb-3"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Combo{' '}
              <span style={{ color: 'var(--banana-pop)' }}>Vibe!</span>
            </h2>
            <p className="text-white/85 text-lg mb-6 font-semibold">
              Buy any 2 VibeShakes & get <strong className="text-yellow-300">20% OFF</strong>.<br />
              Because good vibes are always better shared. 🤝
            </p>
            <a
              href="#menu"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:scale-105 hover:brightness-110 shadow-xl"
              style={{ background: 'var(--midnight-berry)', color: 'white' }}
            >
              Order Now →
            </a>
          </div>

          {/* Right image + badge */}
          <div className="relative flex justify-center">
            <img
              src="/images/combo_shake.jpg"
              alt="Two VibeShakes combo deal"
              className="w-80 md:w-96 object-contain drop-shadow-2xl rounded-2xl"
            />
            {/* 20% badge */}
            <div
              className="absolute top-0 right-0 md:right-4 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl"
              style={{ background: 'var(--banana-pop)', color: 'var(--midnight-berry)' }}
            >
              <span className="font-fredoka text-2xl leading-none">20%</span>
              <span className="font-bold text-xs leading-none">OFF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: 60, marginBottom: -1 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="var(--grape-riot)" />
        </svg>
      </div>
    </section>
  )
}
