import { motion, useInView } from 'framer-motion'
import { CheckCircle,Mail, Send } from 'lucide-react'
import { useRef, useState } from 'react'

import { profile } from '../data/portfolio'
import type { FormState, SocialLink } from '../types/portfolio'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

const socials: SocialLink[] = [
  { icon: GithubIcon, label: 'GitHub', href: profile.github, color: 'hover:text-white' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: profile.linkedin, color: 'hover:text-blue-400' },
]

const inputFields = [
  { id: 'name' as const, label: 'Name', type: 'text', placeholder: 'Your name' },
  { id: 'email' as const, label: 'Email', type: 'email', placeholder: 'you@email.com' },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(() => setSent(true), 500)
  }

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#8B5CF6] text-xs font-normal uppercase tracking-[0.1em] mb-3">Contact</p>
          <h2 className="font-display text-4xl font-bold text-white">Let&apos;s work together</h2>
          <p className="text-[#EDE9FE] mt-4 max-w-xl mx-auto leading-[1.7]">
            Have a project in mind? I&apos;d love to hear about it. Reach out and let&apos;s
            make something great.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-white font-semibold text-[22px] mb-2">Get in touch</h3>
              <p className="text-[#EDE9FE] leading-[1.7]">
                I&apos;m currently available for freelance work and full-time positions. If you
                have a project that needs a skilled developer, I&apos;m your person.
              </p>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-[#EDE9FE] hover:text-[#8B5CF6] transition-colors group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-[#8B5CF6] group-hover:bg-violet-500/20 transition-colors">
                <Mail size={18} />
              </div>
              <span className="font-medium">{profile.email}</span>
            </a>

            <div className="space-y-3">
              <p className="font-mono text-[#C4B5FD] text-xs uppercase tracking-[0.1em]">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 flex items-center justify-center rounded-xl
                      bg-white/5 border border-white/8 text-[#EDE9FE] ${color}
                      transition-all duration-200 hover:bg-white/10`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 text-center py-12"
              >
                <CheckCircle className="text-[#10B981]" size={48} />
                <h3 className="font-display text-white font-semibold text-xl">Message sent!</h3>
                <p className="text-[#EDE9FE]">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className="text-[#8B5CF6] hover:text-[#C4B5FD] text-sm underline"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {inputFields.map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-[#EDE9FE] mb-1.5">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[id]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-[#1e1e2e] text-white placeholder:text-[#C4B5FD]/50 focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/20 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#EDE9FE] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#111118] border border-[#1e1e2e] text-white placeholder:text-[#C4B5FD]/50 focus:outline-none focus:border-[#8B5CF6]/50 focus:ring-1 focus:ring-[#8B5CF6]/20 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#7C3AED]/25"
                >
                  <Send size={16} />
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
