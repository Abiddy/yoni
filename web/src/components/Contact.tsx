import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'motion/react'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#0B0B0B] px-5 pb-24 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 gap-10 bg-[#141414] p-8 md:grid-cols-12 md:p-14"
        >
          <div className="md:col-span-5">
            <h2 className="mb-4 text-3xl leading-[1.1] font-medium tracking-tight text-[#F2F2F2] md:text-5xl">
              Ready to discuss your probate property?
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-[#8A8A8A]">
              Get a free, no-obligation consultation. We&apos;ll review your situation and explain
              your options clearly.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+17142698775"
                className="flex items-center gap-3 text-[15px] font-medium text-[#F2F2F2]"
              >
                <Phone size={16} className="text-[#D6C4A1]" />
                (714) 269-8775
              </a>
              <a
                href="mailto:hello@probatedoctors.com"
                className="flex items-center gap-3 text-[15px] font-medium text-[#F2F2F2]"
              >
                <Mail size={16} className="text-[#D6C4A1]" />
                hello@probatedoctors.com
              </a>
              <div className="flex items-center gap-3 text-[15px] font-medium text-[#F2F2F2]">
                <MapPin size={16} className="text-[#D6C4A1]" />
                Serving all of Southern California
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="flex h-full min-h-[320px] items-center border border-white/10 bg-[#0B0B0B] p-8">
                <div>
                  <h3 className="mb-3 text-2xl font-medium text-[#F2F2F2]">Request received</h3>
                  <p className="text-[15px] leading-relaxed text-[#8A8A8A]">
                    Thank you. We&apos;ll review your note and get back to you promptly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  required
                  name="firstName"
                  placeholder="First name"
                  className="border border-white/10 bg-[#0B0B0B] px-4 py-3.5 text-[14px] text-[#F2F2F2] outline-none placeholder:text-[#666] focus:border-white/30"
                />
                <input
                  required
                  name="lastName"
                  placeholder="Last name"
                  className="border border-white/10 bg-[#0B0B0B] px-4 py-3.5 text-[14px] text-[#F2F2F2] outline-none placeholder:text-[#666] focus:border-white/30"
                />
                <input
                  required
                  name="phone"
                  placeholder="Phone"
                  className="border border-white/10 bg-[#0B0B0B] px-4 py-3.5 text-[14px] text-[#F2F2F2] outline-none placeholder:text-[#666] focus:border-white/30"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-white/10 bg-[#0B0B0B] px-4 py-3.5 text-[14px] text-[#F2F2F2] outline-none placeholder:text-[#666] focus:border-white/30"
                />
                <select
                  required
                  name="situation"
                  defaultValue=""
                  className="border border-white/10 bg-[#0B0B0B] px-4 py-3.5 text-[14px] text-[#F2F2F2] outline-none md:col-span-2 focus:border-white/30"
                >
                  <option value="" disabled>
                    What best describes your situation?
                  </option>
                  <option>I&apos;m an executor / administrator</option>
                  <option>I&apos;m a trustee</option>
                  <option>I&apos;m an heir / beneficiary</option>
                  <option>I&apos;m a probate attorney</option>
                  <option>I&apos;m a professional fiduciary</option>
                  <option>Other</option>
                </select>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your situation"
                  className="resize-none border border-white/10 bg-[#0B0B0B] px-4 py-3.5 text-[14px] text-[#F2F2F2] outline-none placeholder:text-[#666] md:col-span-2 focus:border-white/30"
                />
                <button
                  type="submit"
                  className="bg-[#F2F2F2] px-8 py-4 text-[13px] font-medium tracking-wider text-[#0B0B0B] uppercase md:col-span-2"
                >
                  Request Free Consultation
                </button>
                <p className="text-[12px] text-[#666] md:col-span-2">
                  Your information is confidential and will never be shared.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
