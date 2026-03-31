import * as Separator from '@radix-ui/react-separator'

import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <Separator.Root className="bg-[#1e1e2e] h-px mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 text-sm">
          <p>
            Built by{' '}
            <span className="text-violet-400 font-medium">{profile.name}</span>{' '}
            with React + Vite + Tailwind
          </p>
          <p>&copy; {new Date().getFullYear()} &mdash; All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
