const socials = [
  { icon: '📸', label: 'Instagram', href: '#' },
  { icon: '🎵', label: 'TikTok', href: '#' },
  { icon: '🐦', label: 'Twitter', href: '#' },
  { icon: '▶️', label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden px-6 pt-16 pb-10"
      style={{ background: 'var(--midnight-berry)' }}
    >
      {/* Decorative blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400, height: 400,
          bottom: '-100px', right: '-80px',
          background: 'var(--grape-riot)',
          opacity: 0.4,
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-fredoka text-4xl mb-3" style={{ color: 'var(--lilac-mist)' }}>
              Vibe<span style={{ color: 'var(--banana-pop)' }}>Shake</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Handcrafted milkshakes made with real ingredients and a whole lot of love. Shake your world, one sip at a time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white/80 text-xs uppercase tracking-widest mb-4">Explore</h4>
            <ul className="flex flex-col gap-2">
              {['Our Menu', 'Combo Deals', 'About Us', 'Find a Store', 'Careers'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/55 text-sm hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + newsletter */}
          <div>
            <h4 className="font-bold text-white/80 text-xs uppercase tracking-widest mb-4">Follow the Vibe</h4>
            <div className="flex gap-3 mb-6">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-200 hover:scale-110 hover:brightness-125"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="text-white/40 text-xs mb-3">Get exclusive deals in your inbox:</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 ring-purple-500"
                style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.12)' }}
              />
              <button
                className="px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 hover:brightness-110"
                style={{ background: 'var(--neon-coral)', color: 'white' }}
              >
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-white/30 text-xs text-center">
            © {new Date().getFullYear()} VibeShake Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map(item => (
              <a key={item} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
