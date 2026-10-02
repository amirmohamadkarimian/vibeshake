import { useState, useEffect } from 'react'

const navLinks = ['Home', 'Menu', 'About', 'Shop', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-fredoka text-3xl tracking-wide" style={{ color: 'var(--lilac-mist)' }}>
          Vibe<span style={{ color: 'var(--banana-pop)' }}>Shake</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link}>
              <a
                href="#"
                className="text-white/90 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors duration-200 hover:drop-shadow-sm"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#menu"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 hover:brightness-110"
          style={{ background: 'var(--banana-pop)', color: 'var(--midnight-berry)' }}
        >
          Order Now ⚡
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden nav-glass px-6 pb-5 flex flex-col gap-4">
          {navLinks.map(link => (
            <a key={link} href="#" className="text-white font-semibold text-base" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
          <a
            href="#menu"
            className="inline-flex justify-center px-5 py-2.5 rounded-full font-bold text-sm mt-2"
            style={{ background: 'var(--banana-pop)', color: 'var(--midnight-berry)' }}
            onClick={() => setMenuOpen(false)}
          >
            Order Now ⚡
          </a>
        </div>
      )}
    </nav>
  )
}
