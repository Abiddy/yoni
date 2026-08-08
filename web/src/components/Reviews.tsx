import { motion } from 'motion/react'
import { Star } from 'lucide-react'

const reviews = [
  {
    quote:
      'Very happy with his work and his work ethic. He made what seemed like an impossible situation completely manageable. He understood the probate process inside and out.',
    meta: 'Probate Sale, Orange County',
  },
  {
    quote:
      'They made the process easy and effortless. During such a difficult time, having someone who truly knows probate real estate was invaluable to our family.',
    meta: 'Trust Sale, Southern California',
  },
  {
    quote:
      'Went above and beyond. Coordinated everything — the cleanup, the repairs, the staging — and got us top dollar. We couldn’t have done it without ProbateDoctors.',
    meta: 'Conservatorship Sale',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-[#0B0B0B] px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <h2 className="text-3xl leading-[1.1] font-medium tracking-tight text-[#F2F2F2] md:col-span-7 md:text-5xl">
            Hear directly from families we&apos;ve helped
          </h2>
          <p className="text-[14px] leading-relaxed text-[#8A8A8A] md:col-span-4 md:col-start-9">
            Real feedback from clients who trusted ProbateDoctors with probate, trust, and
            conservatorship property sales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.article
              key={review.meta}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="flex flex-col justify-between bg-[#141414] p-7"
            >
              <div>
                <div className="mb-5 flex gap-1 text-[#D6C4A1]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-[#CFCFCF]">&ldquo;{review.quote}&rdquo;</p>
              </div>
              <div className="mt-8 border-t border-white/8 pt-4 text-[12px] font-medium tracking-tight text-[#8A8A8A]">
                Google Review · {review.meta}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
