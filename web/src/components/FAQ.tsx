import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is probate real estate and do I need a specialized realtor?',
    a: 'Probate real estate refers to property that must be sold as part of settling a deceased person’s estate through the court system. A specialized probate realtor understands court procedures, timelines, confirmations, overbidding, and working with probate referees — reducing costly delays and mistakes.',
  },
  {
    q: 'How long does it take to sell a probate property in California?',
    a: 'With IAEA full authority, a probate sale can close in 30–60 days. If court confirmation is required, expect 3–6 months or more. We work to expedite every stage and prevent unnecessary delays.',
  },
  {
    q: 'What is court confirmation and overbidding?',
    a: 'Court confirmation is a hearing where a judge approves the sale. Other buyers can overbid in the courtroom. The minimum overbid is 10% of the first $10,000 plus 5% of the remaining balance. We prepare you and attend the hearing.',
  },
  {
    q: 'Can you help if I live out of state?',
    a: 'Absolutely. Many clients are out-of-state executors. We coordinate cleanouts, repairs, inspections, showings, court appearances, and keep you updated so everything can be handled remotely.',
  },
  {
    q: 'What if the property needs significant repairs?',
    a: 'We handle properties in any condition and evaluate whether repairs make financial sense. Our trusted contractor network specializes in estate properties, always with the goal of maximizing net proceeds.',
  },
  {
    q: 'What’s the difference between probate, trust, and conservatorship sales?',
    a: 'Probate sales go through court when there is no trust. Trust sales often avoid probate and can close faster. Conservatorship sales involve property owned by someone unable to manage their affairs. We have experience with all three.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[#0B0B0B] px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <h2 className="text-3xl leading-[1.1] font-medium tracking-tight text-[#F2F2F2] md:col-span-7 md:text-5xl">
            Common probate real estate questions
          </h2>
          <p className="text-[14px] leading-relaxed text-[#8A8A8A] md:col-span-4 md:col-start-9">
            Clear answers for executors, heirs, trustees, and attorneys evaluating next steps.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-[16px] font-medium tracking-tight text-[#F2F2F2] md:text-[18px]">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus size={18} className="shrink-0 text-[#D6C4A1]" />
                  ) : (
                    <Plus size={18} className="shrink-0 text-[#8A8A8A]" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-6 text-[14px] leading-relaxed text-[#8A8A8A] md:text-[15px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
