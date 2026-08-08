import { motion } from 'motion/react'
import { Phone } from 'lucide-react'
import { Navbar } from './Navbar'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_144509_89e2d612-8af2-45c3-90f4-4831bc60715d.mp4'

const stripItems = [
  '5.0 ★ Google Rating',
  '12+ Five-Star Reviews',
  '4 Counties Served',
  'Foreclosures',
  'Probate',
  'As-is Sales',
  'Buying / Selling / Investing',
  'Trust & Conservatorship',
]

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B0B0B]/90 via-[#0B0B0B]/70 to-[#0B0B0B]/35" />
      <div className="absolute inset-0 z-[1] bg-[#0B0B0B]/25" />

      <div className="relative z-10 flex h-full flex-col bg-white/5">
        <Navbar />

        <div className="mx-auto flex w-full max-w-[1400px] flex-1 items-center px-5 pb-6 md:px-10 lg:px-14">
          <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-5 inline-block border border-white/25 px-3 py-2 text-[11px] font-bold tracking-[0.14em] text-[#F2F2F2] uppercase"
              >
                Southern California&apos;s Probate Specialist
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="max-w-3xl text-4xl leading-[1.05] font-medium tracking-tight text-[#F2F2F2] md:text-5xl lg:text-7xl"
              >
                Your real estate{' '}
                <em className="font-normal text-[#D6C4A1] italic">professionals</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-5 max-w-xl text-[15px] leading-[1.55] text-[#B5B5B5] md:text-[17px]"
              >
                Selling a probate, trust, or conservatorship property doesn&apos;t have to be
                overwhelming. We guide families through every step — protecting your interests and
                maximizing value across Southern California.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="tel:+17142698775"
                  className="inline-flex items-center gap-2 bg-[#F2F2F2] px-7 py-4 text-[13px] font-medium tracking-wider text-[#0B0B0B] uppercase shadow-2xl"
                >
                  <Phone size={15} strokeWidth={2.25} />
                  (714) 269-8775
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center border border-white/20 bg-white/5 px-7 py-4 text-[13px] font-medium text-[#F2F2F2] backdrop-blur-md hover:bg-white/10"
                >
                  Request Free Consultation
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative mx-auto w-full max-w-[260px] md:col-span-4 md:col-start-9 md:mx-0 md:max-w-[300px] lg:max-w-[340px]"
            >
              <div className="absolute -inset-2 border border-white/15 md:-inset-2.5" />
              <div className="absolute top-[-8px] left-[-8px] h-5 w-5 border-t-2 border-l-2 border-[#D6C4A1] md:top-[-10px] md:left-[-10px] md:h-6 md:w-6" />
              <div className="absolute right-[-8px] bottom-[-8px] h-5 w-5 border-r-2 border-b-2 border-[#D6C4A1] md:right-[-10px] md:bottom-[-10px] md:h-6 md:w-6" />
              <img
                src="/realtor.png"
                alt="ProbateDoctors realtor"
                className="relative z-10 aspect-[4/5] w-full object-cover object-top"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="border-t border-white/10 bg-black/35 backdrop-blur-md"
        >
          <div className="hero-marquee" aria-label="Highlights">
            <div className="hero-marquee__track">
              {[...stripItems, ...stripItems].map((item, i) => (
                <span key={`${item}-${i}`} className="hero-marquee__item">
                  <span className="hero-marquee__dot" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
