import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { profile } from '../data/portfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

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
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </span>
          <span className="flex items-center gap-1.5 text-slate-500 text-xs">
            <MapPin size={12} />
            {profile.location}
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
        >
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              {profile.name}
            </span>
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-xl sm:text-2xl text-slate-400 font-medium mb-4"
        >
          {profile.role}
        </motion.p>

        <motion.p
          {...fadeUp(0.4)}
          className="text-slate-500 text-lg max-w-2xl mx-auto mb-10"
        >
          {profile.tagline}
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/25"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-200"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.6)} className="flex items-center justify-center gap-4">
          {[
            { icon: GithubIcon, href: profile.github, label: 'GitHub' },
            { icon: LinkedinIcon, href: profile.linkedin, label: 'LinkedIn' },
            { icon: TwitterIcon, href: profile.twitter, label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.8)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
