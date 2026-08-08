import { motion } from 'motion/react'

const areas = [
  {
    title: 'Orange County',
    desc: 'Irvine, Tustin, Anaheim, Santa Ana, Fullerton, Huntington Beach, Newport Beach, Costa Mesa, Garden Grove, and all OC communities.',
  },
  {
    title: 'Los Angeles County',
    desc: 'Los Angeles, Long Beach, Pasadena, Torrance, Downey, Whittier, Pomona, and surrounding LA communities.',
  },
  {
    title: 'San Diego County',
    desc: 'San Diego, Oceanside, Escondido, Carlsbad, Chula Vista, and surrounding San Diego communities.',
  },
  {
    title: 'Riverside County',
    desc: 'Riverside, Corona, Temecula, Murrieta, Moreno Valley, and surrounding Inland Empire communities.',
  },
]

export function Areas() {
  return (
    <section id="areas" className="bg-[#0B0B0B] px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <h2 className="text-3xl leading-[1.1] font-medium tracking-tight text-[#F2F2F2] md:col-span-7 md:text-5xl">
            Probate services across Southern California
          </h2>
          <p className="text-[14px] leading-relaxed text-[#8A8A8A] md:col-span-4 md:col-start-9">
            Local market knowledge for every estate property — including multi-county portfolios and
            out-of-state executors who need boots on the ground.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="border border-white/8 bg-[#141414] p-7 md:p-9"
            >
              <h3 className="mb-3 text-xl font-medium tracking-tight text-[#F2F2F2]">{area.title}</h3>
              <p className="text-[14px] leading-relaxed text-[#8A8A8A]">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
