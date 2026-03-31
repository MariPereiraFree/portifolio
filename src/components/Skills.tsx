import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { skills } from '../data/portfolio'

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 className="text-4xl font-bold text-white">Skills &amp; Technologies</h2>
          <p className="text-slate-200 mt-4 max-w-xl mx-auto">
            Tools and technologies I work with on a daily basis to build great products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-6 hover:border-violet-500/30 transition-colors duration-300 group"
            >
              <h3 className="text-white font-semibold mb-4 group-hover:text-violet-300 transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 + 0.2 }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-slate-300 text-sm hover:bg-violet-500/15 hover:border-violet-500/30 hover:text-violet-300 cursor-default transition-all duration-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
