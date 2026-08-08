import { motion } from 'motion/react'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

type BarShapeProps = {
  x?: number
  y?: number
  width?: number
  height?: number
}

function CapBar(props: BarShapeProps) {
  const { x = 0, y = 0, width = 0, height = 0 } = props
  if (height <= 0) return null

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#F2F2F2" fillOpacity={0.08} />
      <rect x={x} y={y} width={width} height={2} fill="#D6C4A1" />
    </g>
  )
}

const charts = [
  {
    title: 'Annual growth',
    value: '19%',
    data: [35, 60, 45, 40, 55, 75, 60, 80, 55, 30].map((v, i) => ({ i, v })),
  },
  {
    title: 'Aggregate yield profit',
    value: '$820,000',
    data: [8, 12, 18, 28, 32, 38, 55, 70, 85].map((v, i) => ({ i, v })),
  },
  {
    title: 'Median returns',
    value: '14%',
    data: [10, 75, 20, 35, 30, 65, 55, 25, 40].map((v, i) => ({ i, v })),
  },
]

export function Analytics() {
  return (
    <section className="bg-[#0B0B0B] px-5 py-20 md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <h2 className="text-3xl leading-[1.1] font-medium tracking-tight text-[#F2F2F2] md:col-span-6 md:text-5xl">
            Trusted frameworks for secure growth
          </h2>
          <div className="space-y-4 text-[14px] leading-relaxed text-[#8A8A8A] md:col-span-5 md:col-start-8 md:text-right">
            <p>
              Our work goes beyond floor plans; every probate sale is a vehicle to protect and grow
              estate value with consistency.
            </p>
            <p>
              We meticulously vet market strategy, repair upside, and court pathways for families and
              fiduciaries we partner with.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {charts.map((chart, index) => (
            <motion.div
              key={chart.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="flex aspect-video flex-col justify-between bg-[#141414] p-6 md:aspect-[1.8/1]"
            >
              <div>
                <div className="text-[12px] font-medium tracking-tight text-[#F2F2F2]/40 uppercase">
                  {chart.title}
                </div>
                <div className="mt-2 text-4xl font-medium text-[#F2F2F2]">{chart.value}</div>
              </div>
              <div className="h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chart.data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                    <XAxis dataKey="i" hide />
                    <YAxis hide domain={[0, 'dataMax']} />
                    <Bar dataKey="v" shape={<CapBar />} isAnimationActive />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
