import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const steps = [
  {
    id: 'executor',
    label: 'Executor appointed',
    title: 'Executor or Administrator Appointed',
    desc: 'The court appoints an executor (if there’s a will) or administrator to manage the estate. This person has the legal authority to make decisions about the property.',
  },
  {
    id: 'strategy',
    label: 'Evaluation & strategy',
    title: 'Property Evaluation & Strategy',
    desc: 'We evaluate the property’s current condition, quick-sale value, and potential after repairs. Together we determine the best strategy for your situation.',
  },
  {
    id: 'appraisal',
    label: 'Referee appraisal',
    title: 'Probate Referee Appraisal',
    desc: 'A court-appointed probate referee appraises the property. The accepted offer must be at least 90% of this appraised value.',
  },
  {
    id: 'closing',
    label: 'Listing & close',
    title: 'Listing, Confirmation & Close',
    desc: 'We market aggressively, handle court confirmation when required, attend hearings, and coordinate escrow through distribution of proceeds.',
  },
]

const IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260503_150112_2b0e700f-7af4-4459-b326-7d9e2f468daa.png&w=1280&q=85'

export function Process() {
  const [active, setActive] = useState(steps[1].id)
  const current = steps.find((s) => s.id === active) ?? steps[0]

  return (
    <section id="process" className="bg-[#0B0B0B] px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <h2 className="text-3xl leading-[1.1] font-medium tracking-tight text-[#F2F2F2] md:col-span-7 md:text-5xl">
            Explore our service and the process
          </h2>
          <p className="text-[14px] leading-relaxed text-[#8A8A8A] md:col-span-4 md:col-start-9 md:text-right">
            Digital walkthroughs of the California probate path, private consults, and professional
            insight — so families can move forward with clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="flex flex-col justify-between bg-[#141414] p-8 md:col-span-4 md:p-16">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="mb-4 text-3xl font-medium tracking-tight text-[#F2F2F2]">
                    {current.title}
                  </h3>
                  <p className="mb-8 text-[15px] leading-relaxed text-[#8A8A8A]">{current.desc}</p>
                </motion.div>
              </AnimatePresence>
              <a
                href="#contact"
                className="inline-block border border-white/15 bg-transparent px-6 py-3 text-[13px] font-medium text-[#F2F2F2] hover:bg-white/5"
              >
                Free consult
              </a>
            </div>

            <div className="mt-12 flex flex-col gap-3">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActive(step.id)}
                  className={`text-left text-[13px] font-medium transition-colors ${
                    active === step.id ? 'text-[#F2F2F2]' : 'text-[#8A8A8A] hover:text-[#F2F2F2]'
                  }`}
                >
                  {index + 1} · {step.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="aspect-video overflow-hidden md:aspect-square">
              <img src={IMAGE} alt="Modern residence" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
