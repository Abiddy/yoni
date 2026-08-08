import { motion } from 'motion/react'
import { Network, Wrench, Clock3 } from 'lucide-react'

const services = [
  {
    title: '"AS-IS" Sales',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Probate Sales',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Private Sales',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Trust Sales',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Trade Sales',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
  },
]

const extras = [
  { icon: Network, label: 'Attorney & court relationships' },
  { icon: Wrench, label: 'Handles every detail' },
  { icon: Clock3, label: 'Available when you need us' },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-[#0B0B0B] px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          <h2 className="text-3xl leading-[1.1] font-medium tracking-tight text-[#F2F2F2] md:col-span-7 md:text-5xl">
            Specialized expertise when it matters most
          </h2>
          <p className="text-[14px] leading-relaxed text-[#8A8A8A] md:col-span-4 md:col-start-9 md:text-[15px]">
            Most agents have handled one or two probate transactions in their career. This is all we
            do — and it makes all the difference for executors, trustees, and families.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href="#contact"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className={`group relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[5/4] ${
                i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <span className="text-[18px] font-bold tracking-tight text-white drop-shadow-md md:text-[20px]">
                  {service.title}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {extras.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-3 border border-white/10 bg-[#121212] px-5 py-4"
              >
                <Icon size={16} strokeWidth={2.25} className="text-[#D6C4A1]" />
                <span className="text-[13px] font-medium text-[#F2F2F2]">{item.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
