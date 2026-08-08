import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Phone, X } from 'lucide-react'

const links = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews', badge: 'NEW' },
  { label: 'Areas', href: '#areas' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="relative z-20 flex items-center justify-between px-5 py-5 md:px-10 lg:px-14">
        <a href="#" className="text-xl font-black leading-[0.85] tracking-tighter text-[#F2F2F2]">
          PROBATE
          <br />
          DOCTORS
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium tracking-tight text-[#F2F2F2] hover:opacity-60"
            >
              {link.label}
              {link.badge ? (
                <span className="rounded-xs bg-[#F2F2F2] px-1.5 py-0.5 text-[9px] leading-none text-[#0B0B0B]">
                  {link.badge}
                </span>
              ) : null}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 border border-white/15 bg-white/10 px-6 py-2.5 text-[13px] font-medium text-[#F2F2F2] backdrop-blur-md hover:bg-white/15 lg:inline-flex"
        >
          <Phone size={14} strokeWidth={2.25} />
          Free consultation
        </a>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex items-center justify-center border border-white/15 bg-white/10 p-2.5 text-[#F2F2F2] lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={18} />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,360px)] flex-col bg-[#111111] px-6 py-6 shadow-2xl"
          >
            <div className="mb-10 flex items-center justify-between">
              <div className="text-lg font-black leading-[0.85] tracking-tighter">
                PROBATE
                <br />
                DOCTORS
              </div>
              <button
                type="button"
                aria-label="Close menu"
                className="border border-white/15 p-2"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[18px] font-medium tracking-tight text-[#F2F2F2]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 bg-[#F2F2F2] px-6 py-4 text-center text-[13px] font-medium uppercase tracking-wider text-[#0B0B0B]"
            >
              Free consultation
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
