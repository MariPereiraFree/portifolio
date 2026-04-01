import * as Tooltip from '@radix-ui/react-tooltip'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useRef } from 'react'

import { projects } from '../data/portfolio'
import type { Project } from '../types/portfolio'
import { GithubIcon } from './SocialIcons'

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

function ProjectCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#111118] border border-[#1e1e2e] rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/10"
    >
      {/* Gradient header */}
      <div className={`h-2 bg-linear-to-r ${project.gradient}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-[22px] font-semibold text-white group-hover:text-[#C4B5FD] transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Tooltip.Provider delayDuration={200}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-[#EDE9FE] hover:text-white transition-colors"
                  >
                    <GithubIcon size={15} />
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="px-3 py-1.5 bg-[#1e1e2e] text-white text-xs rounded-lg border border-white/10"
                    sideOffset={5}
                  >
                    View on GitHub
                    <Tooltip.Arrow className="fill-[#1e1e2e]" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>

              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-[#EDE9FE] hover:text-white transition-colors"
                  >
                    <ExternalLink size={15} />
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="px-3 py-1.5 bg-[#1e1e2e] text-white text-xs rounded-lg border border-white/10"
                    sideOffset={5}
                  >
                    Live demo
                    <Tooltip.Arrow className="fill-[#1e1e2e]" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
        </div>

        <p className="text-[#C4B5FD] text-sm leading-[1.7] mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono px-2.5 py-1 rounded-md bg-white/5 text-[#C4B5FD] text-xs uppercase tracking-[0.1em]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#8B5CF6] text-xs font-normal uppercase tracking-[0.1em] mb-3">Portfolio</p>
          <h2 className="font-display text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-[#EDE9FE] mt-4 max-w-xl mx-auto leading-[1.7]">
            A selection of things I&apos;ve built. Each project taught me something new.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 2} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
