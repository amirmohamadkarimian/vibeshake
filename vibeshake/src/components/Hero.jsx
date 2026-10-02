import { useEffect, useRef } from 'react'

export default function Hero() {
  const badgeRef1 = useRef(null)
  const badgeRef2 = useRef(null)

  useEffect(() => {
    // Stagger badge pop-in after mount
    const t1 = setTimeout(() => {
      if (badgeRef1.current) {
        badgeRef1.current.style.animation = 'pop-in 0.6s cubic-bezier(.34,1.56,.64,1) forwards'
      }
    }, 900)
    const t2 = setTimeout(() => {
      if (badgeRef2.current) {
        badgeRef2.current.style.animation = 'pop-in 0.6s cubic-bezier(.34,1.56,.64,1) forwards'
      }
    }, 1200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--grape-riot)' }}
    >
      {/* ── Morphing blobs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 480, height: 480,
          top: '-10%', left: '-8%',
          background: 'var(--lilac-mist)',
          opacity: 0.35,
          animation: 'blob-morph-1 9s ease-in-out infinite',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 420, height: 420,
          bottom: '-5%', right: '-5%',
          background: 'var(--neon-coral)',
          opacity: 0.25,
          animation: 'blob-morph-2 11s ease-in-out infinite',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 300, height: 300,
          top: '55%', left: '38%',
          background: 'var(--banana-pop)',
          opacity: 0.18,
          animation: 'blob-morph-3 13s ease-in-out infinite',
        }}
      />

      {/* ── Large wavy white bottom divider ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" style={{ height: 80 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--sugar-white)" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div className="flex flex-col gap-6">

          {/* Headline */}
          <h1 className="font-fredoka leading-tight" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: 'white' }}>
            Shake Your{' '}
            <span
              className="relative inline-block"
              style={{ color: 'var(--neon-coral)', WebkitTextStroke: '2px var(--neon-coral)', textShadow: '0 0 40px rgba(255,77,109,0.5)' }}
            >
              Vibe
            </span>
            <br />
            <span style={{ color: 'var(--banana-pop)' }}>Every Sip!</span>
          </h1>

          {/* Sub */}
          <p className="text-white/75 text-lg max-w-md leading-relaxed" style={{ fontFamily: 'Nunito' }}>
            Handcrafted milkshakes so thick, so rich, and so bold — your taste buds will never want to leave. Blended fresh, served with love.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex text-yellow-400 text-xl">★★★★★</div>
            <span className="text-white/80 font-semibold text-sm">4.9 <span className="text-white/50">(2,841 reviews)</span></span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:scale-105 hover:brightness-110 shadow-lg"
              style={{ background: 'var(--neon-coral)', color: 'white' }}
            >
              Explore Menu →
            </a>
            <a
              href="#combo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: 'var(--banana-pop)', color: 'var(--banana-pop)' }}
            >
              Grab a Deal
            </a>
          </div>
        </div>

        {/* Right — hero shake */}
        <div className="relative flex justify-center items-center">
          <img
            src={`${import.meta.env.BASE_URL}images/hero_shake.png`}
            alt="Signature VibeShake strawberry milkshake"
            className="relative z-10 w-72 md:w-96 object-contain drop-shadow-2xl"
            style={{ animation: 'float 4s ease-in-out infinite' }}
          />

          {/* Badge 1 */}
          <div
            ref={badgeRef1}
            className="absolute z-20 top-12 right-4 md:right-0 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl"
            style={{ background: 'white', opacity: 0, minWidth: 170 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: 'var(--grape-riot)' }}>
              🍓
            </div>
            <div>
              <div className="font-bold text-sm" style={{ color: 'var(--midnight-berry)' }}>100% Real</div>
              <div className="text-xs text-gray-500">Fresh Ingredients</div>
            </div>
          </div>

          {/* Badge 2 */}
          <div
            ref={badgeRef2}
            className="absolute z-20 bottom-20 left-4 md:-left-4 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl"
            style={{ background: 'white', opacity: 0, minWidth: 170 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: 'var(--neon-coral)' }}>
              ⚡
            </div>
            <div>
              <div className="font-bold text-sm" style={{ color: 'var(--midnight-berry)' }}>Blended Fresh</div>
              <div className="text-xs text-gray-500">Every Single Day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
