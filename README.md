<div align="center">

# ✦ mari.dev — Personal Portfolio

> *A dark, animated, pixel-perfect developer portfolio.*
> *Built to impress. Shipped to last.*

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

---

## 🪐 What is this project?

This is a **fully custom personal portfolio website** built from scratch to showcase who I am, the work I've done, and the technologies I love working with. It's designed to be:

- **Fast** — powered by Vite with near-instant HMR and lean production bundles
- **Type-safe** — fully written in TypeScript, from data models to component props
- **Accessible** — using Radix UI primitives that handle ARIA and keyboard navigation out of the box
- **Animated** — Framer Motion drives every entrance, scroll reveal, and micro-interaction
- **Dark & clean** — a deep dark theme that won't murder your eyes at 2 AM

The portfolio covers five sections: **About**, **Skills**, **Projects**, **Experience**, and **Contact** — plus a sticky animated navbar and a responsive mobile menu.

---

## 🛠️ Technologies Used

| Layer | Technology | Why |
|---|---|---|
| **Framework** | React 19 + Vite 8 | Fastest DX + best-in-class bundling |
| **Language** | TypeScript (strict mode) | Catch bugs at compile time, not runtime |
| **Styling** | Tailwind CSS v4 | Utility-first, zero-runtime, co-located styles |
| **UI Primitives** | Radix UI | Accessible headless components (Avatar, Tooltip, Separator) |
| **Animations** | Framer Motion | Production-grade motion with a great API |
| **Icons** | Lucide React + custom SVGs | Consistent icon system; brand icons as inline SVGs |
| **Fonts** | Inter (Google Fonts) | Clean, readable, professional |

### Project structure

```
src/
├── components/        # All UI sections (Navbar, Hero, About, …)
├── data/
│   └── portfolio.ts   # ← all mock data lives here, easy to update
├── types/
│   └── portfolio.ts   # Shared TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css          # Tailwind + global resets
```

> **Updating content is simple:** just edit `src/data/portfolio.ts` — change the name, bio, projects, experience, and links. No touching component files needed.

---

## 👤 Who am I?

Hi! I'm **Mariana Pereira**, but you can call me **Mari** or **Mary**, I'm a Front End Developer based in Jacareí-SP, Brazil. I've been building web products for 4+ years — from polished marketing sites to complex SaaS platforms. I care deeply about:

- Writing code that's easy to read and maintain
- Shipping fast without cutting corners on quality
- Working interfaces that delight and satisfy my customers

When I'm not in front of a screen, I'm probably listening to music, reading fantasy, or studying new technologies just for fun.

📬 **Let's talk:** [mari.savoldi@protonmail.com](mailto:mari.savoldi@protonmail.com)
🔗 **GitHub:** [github.com/MariPereiraFree](https://github.com/MariPereiraFree)
💼 **LinkedIn:** [linkedin.com/in/mariana-savoldi-pereira](https://www.linkedin.com/in/mariana-savoldi-pereira/)

---

## 🚀 Running locally

```bash
# 1. Clone the repo
git clone git@github.com:MariPereiraFree/portifolio.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Build for production
npm run build
```

> Requires **Node.js 18+**

---

## 🗂️ Sections at a glance

| Section | Description |
|---|---|
| 🏠 **Hero** | Animated intro with name, role, social links, and a pulsing "available for work" badge |
| 👤 **About** | Bio, avatar (Radix UI), stats grid, and personality traits |
| ⚙️ **Skills** | Tech stack organized into Frontend / Backend / DevOps / Tools |
| 🗂️ **Projects** | Showcase cards with gradient headers and Radix Tooltip links |
| 🏢 **Experience** | Timeline of work history with company, role, period, and tech tags |
| ✉️ **Contact** | Contact form with success state + social links |

---

## 🎨 Design decisions

- **Color palette:** near-black `#0a0a0f` background with violet `#7c3aed` as the primary accent — dark enough to feel professional, vibrant enough to have personality
- **Motion:** all scroll-triggered animations use `framer-motion`'s `useInView` with `once: true` so they only fire once per page load
- **No CSS-in-JS:** Tailwind v4 keeps styles co-located with markup and fully static at build time — no runtime overhead
- **Radix UI:** primitives like `<Tooltip>` and `<Avatar>` handle all the accessibility complexity (ARIA roles, keyboard nav, focus management) so the components stay clean

---

<div align="center">

Made with ☕ + 🎧 + too many dark mode hours

*Feel free to fork and customize — just swap out the data in `src/data/portfolio.ts`!*

</div>
