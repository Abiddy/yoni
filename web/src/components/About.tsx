import { motion } from 'motion/react'

const pills = [
  'Probate Real Estate Specialist',
  'Licensed California Realtor',
  'Trust & Conservatorship Sales',
  'Court Confirmation Expert',
]

export function About() {
  return (
    <section id="about" className="bg-[#0B0B0B] px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="relative md:col-span-5"
        >
          <div className="absolute -inset-3 border border-white/10" />
          <img
            src="/realtor.png"
            alt="ProbateDoctors founder"
            className="relative z-10 aspect-[4/5] w-full object-cover object-top"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="md:col-span-7"
        >
          <div className="mb-5 inline-block border border-white/20 px-3 py-2 text-[11px] font-bold tracking-[0.14em] text-[#D6C4A1] uppercase">
            About ProbateDoctors
          </div>
          <h2 className="mb-6 text-3xl leading-[1.1] font-medium tracking-tight text-[#F2F2F2] md:text-5xl">
            Your trusted probate real estate specialist
          </h2>
          <p className="mb-4 max-w-2xl text-[15px] leading-relaxed text-[#A5A5A5] md:text-[17px]">
            ProbateDoctors was built for families navigating one of life&apos;s most challenging
            moments. We understand that dealing with probate real estate often arrives with grief,
            urgency, and complex legal requirements.
          </p>
          <p className="mb-4 max-w-2xl text-[15px] leading-relaxed text-[#A5A5A5] md:text-[17px]">
            That&apos;s why our practice is centered on one goal: making the probate property sale
            as simple, transparent, and profitable as possible for executors, administrators,
            trustees, and fiduciaries.
          </p>
          <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-[#A5A5A5] md:text-[17px]">
            With deep knowledge of the California probate court system, strong relationships with
            probate attorneys and referees, and a hands-on approach to every transaction, we handle
            the complexities so you can focus on what matters most — your family.
          </p>
          <div className="flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="border border-white/12 bg-[#141414] px-3.5 py-2.5 text-[12px] font-medium text-[#F2F2F2]"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
