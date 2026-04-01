import { motion, type Transition } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'

import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

interface FadeUpProps {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: Transition;
}

const fadeUp = (delay = 0): FadeUpProps => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const socialLinks = [
  { icon: GithubIcon, href: profile.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: profile.linkedin, label: 'LinkedIn' },
] as const

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeUp(0.1)} className="flex items-center justify-center gap-2 mb-6">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs font-mono uppercase tracking-[0.1em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            Available for work
          </span>
          <span className="flex items-center gap-1.5 text-[#C4B5FD] text-xs font-mono">
            <MapPin size={12} />
            {profile.location}
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display text-6xl sm:text-7xl md:text-[72px] font-extrabold text-white tracking-[-0.02em] leading-tight mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7C3AED] to-[#A78BFA]">
              {profile.name}
            </span>
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="font-mono text-sm sm:text-base text-[#8B5CF6] font-normal uppercase tracking-[0.1em] mb-4"
        >
          {profile.role}
        </motion.p>

        <motion.p
          {...fadeUp(0.4)}
          className="text-[#EDE9FE] text-lg max-w-2xl mx-auto mb-10 leading-[1.6]"
        >
          {profile.tagline}
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#7C3AED]/25"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#EDE9FE] font-medium transition-all duration-200"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.6)} className="flex items-center justify-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#EDE9FE] hover:text-white transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.8)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C4B5FD] animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  )
}
