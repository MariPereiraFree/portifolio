import * as Separator from '@radix-ui/react-separator'
import { motion, useInView } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useRef } from 'react'

import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#8B5CF6] text-xs font-normal uppercase tracking-[0.1em] mb-3">Career</p>
          <h2 className="font-display text-4xl font-bold text-white">Work Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#1e1e2e] hidden md:block" />

          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 items-center justify-center rounded-xl bg-violet-600/20 border border-violet-500/30 text-[#8B5CF6]">
                  <Briefcase size={18} />
                </div>

                <div className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-6 hover:border-violet-500/20 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-white font-bold text-[22px]">{job.role}</h3>
                      <p className="text-[#8B5CF6] font-medium">{job.company}</p>
                    </div>
                    <span className="font-mono px-3 py-1 rounded-full bg-white/5 border border-white/8 text-[#C4B5FD] text-xs uppercase tracking-[0.1em]">
                      {job.period}
                    </span>
                  </div>

                  <Separator.Root className="bg-[#1e1e2e] h-px my-4" />

                  <p className="text-[#EDE9FE] text-sm leading-[1.7] mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-[#C4B5FD] text-xs uppercase tracking-[0.1em]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
