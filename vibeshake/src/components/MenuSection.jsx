import { useEffect, useRef } from 'react'

const shakes = [
  {
    id: 1,
    name: 'Berry Bliss',
    tag: 'Fan Favorite 🍓',
    tagColor: '#FF4D6D',
    img: `${import.meta.env.BASE_URL}images/shake_strawberry.jpg`,
    desc: 'Fresh strawberries, vanilla cream, and a swirl of berry magic.',
  },
  {
    id: 2,
    name: 'Dark Obsession',
    tag: "Chef\u2019s Pick 🍫",
    tagColor: '#3A0CA3',
    img: `${import.meta.env.BASE_URL}images/shake_choco.jpg`,
    desc: 'Triple chocolate, crushed Oreo, and dark cocoa drizzle.',
  },
  {
    id: 3,
    name: 'Mango Fever',
    tag: 'Tropical Hit 🥭',
    tagColor: '#FFD60A',
    img: `${import.meta.env.BASE_URL}images/shake_mango.jpg`,
    desc: 'Sun-ripened Alphonso mango whipped into creamy perfection.',
  },
  {
    id: 4,
    name: 'Oreo Storm',
    tag: 'Best Seller 🌪️',
    tagColor: '#C77DFF',
    img: `${import.meta.env.BASE_URL}images/shake_oreo.jpg`,
    desc: 'Cookies & cream, vanilla ice cream, and a cookie crown.',
  },
]

export default function MenuSection() {
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
    <section id="menu" className="py-24 px-6" style={{ background: 'var(--sugar-white)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(58,12,163,0.08)', color: 'var(--grape-riot)' }}
          >
            Our Menu
          </span>
          <h2
            className="font-fredoka leading-tight mb-3"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--grape-riot)' }}
          >
            Signature{' '}
            <span style={{ color: 'var(--neon-coral)' }}>Shakes</span>
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Every shake is handcrafted in small batches with premium ingredients. No shortcuts, no compromises.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {shakes.map((shake, i) => (
            <div
              key={shake.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="menu-card reveal rounded-3xl overflow-hidden cursor-pointer"
              style={{
                background: 'white',
                transitionDelay: `${i * 0.1}s`,
                boxShadow: '0 6px 30px rgba(58,12,163,0.08)',
              }}
            >
              {/* Image */}
              <div
                className="h-52 flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #f8f0ff 0%, #fff5f7 100%)' }}
              >
                <img
                  src={shake.img}
                  alt={shake.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{ background: `${shake.tagColor}18`, color: shake.tagColor }}
                >
                  {shake.tag}
                </span>
                <h3 className="font-fredoka text-xl mb-1" style={{ color: 'var(--midnight-berry)' }}>
                  {shake.name}
                </h3>
                <p className="text-gray-500 text-sm leading-snug mb-4">{shake.desc}</p>
                <button
                  className="w-full py-2.5 rounded-xl font-bold text-sm transition-all duration-200 hover:brightness-110"
                  style={{ background: 'var(--grape-riot)', color: 'white' }}
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel nav hint (mobile) */}
        <p className="text-center text-gray-400 text-xs mt-8 md:hidden">Swipe to see all flavors →</p>
      </div>
    </section>
  )
}
