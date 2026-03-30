import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/portfolio';
import * as Avatar from '@radix-ui/react-avatar';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '4+', label: 'Years experience' },
    { value: '30+', label: 'Projects shipped' },
    { value: '15+', label: 'Happy clients' },
    { value: '∞', label: 'Cups of coffee' },
  ];

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Avatar side */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-indigo-600/30 rounded-3xl blur-xl scale-110" />
              <Avatar.Root className="relative w-56 h-56 rounded-3xl overflow-hidden border-2 border-violet-500/20">
                <Avatar.Image
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover bg-[#111118]"
                />
                <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-violet-900/50 text-violet-300 text-5xl font-bold">
                  {profile.name[0]}
                </Avatar.Fallback>
              </Avatar.Root>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#111118] border border-[#1e1e2e] rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-slate-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">About me</p>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Passionate about crafting great software
              </h2>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              {profile.bio}
            </p>

            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me hiking, reading sci-fi, or tinkering with side projects. I believe the best products come from teams that combine technical rigor with genuine empathy for users.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Pixel-Perfect'].map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
            >
              {profile.email} →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
