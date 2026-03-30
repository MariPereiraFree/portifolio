export const profile = {
  name: 'Alex Rivera',
  role: 'Full Stack Developer',
  tagline: 'I build fast, accessible, and beautiful web experiences.',
  bio: "Hi, I'm Alex — a full stack developer with 4+ years of experience crafting modern web applications. I love turning complex problems into clean, elegant solutions. Currently open to new opportunities.",
  location: 'São Paulo, Brazil',
  email: 'alex.rivera@email.com',
  github: 'https://github.com/alexrivera',
  linkedin: 'https://linkedin.com/in/alexrivera',
  twitter: 'https://twitter.com/alexrivera',
  avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Alex',
};

export const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'Redis'] },
  { category: 'DevOps', items: ['Docker', 'CI/CD', 'AWS', 'Vercel', 'GitHub Actions'] },
  { category: 'Tools', items: ['Git', 'Figma', 'Postman', 'Vitest', 'Playwright'] },
];

export const projects = [
  {
    id: 1,
    title: 'TaskFlow',
    description: 'A real-time collaborative task manager with drag-and-drop boards, live cursors, and team presence indicators.',
    tags: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
    github: 'https://github.com/alexrivera/taskflow',
    live: 'https://taskflow.demo',
    featured: true,
    gradient: 'from-violet-600 to-indigo-600',
  },
  {
    id: 2,
    title: 'ShopNest',
    description: 'Full-featured e-commerce platform with Stripe payments, inventory management, and an admin dashboard.',
    tags: ['Next.js', 'Stripe', 'Prisma', 'TypeScript'],
    github: 'https://github.com/alexrivera/shopnest',
    live: 'https://shopnest.demo',
    featured: true,
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    id: 3,
    title: 'DevMetrics',
    description: 'GitHub analytics dashboard that visualizes contribution patterns, PR review cycles, and team velocity.',
    tags: ['React', 'GitHub API', 'Recharts', 'Tailwind'],
    github: 'https://github.com/alexrivera/devmetrics',
    live: 'https://devmetrics.demo',
    featured: false,
    gradient: 'from-cyan-600 to-teal-600',
  },
  {
    id: 4,
    title: 'Nomad Blog',
    description: 'A headless CMS-powered blog with MDX support, full-text search, and reading progress tracking.',
    tags: ['Next.js', 'Contentlayer', 'MDX', 'Algolia'],
    github: 'https://github.com/alexrivera/nomad-blog',
    live: 'https://nomad-blog.demo',
    featured: false,
    gradient: 'from-amber-600 to-orange-600',
  },
];

export const experience = [
  {
    company: 'Nexora Labs',
    role: 'Senior Frontend Developer',
    period: '2023 – Present',
    description: 'Led the rewrite of the main SaaS product from Vue 2 to React 18, improving performance by 60% and reducing bundle size by 40%.',
    tech: ['React', 'TypeScript', 'GraphQL'],
  },
  {
    company: 'Bluewave Agency',
    role: 'Full Stack Developer',
    period: '2021 – 2023',
    description: 'Delivered 12+ client projects ranging from marketing sites to custom internal tools. Introduced automated testing that cut regression bugs by 80%.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2020 – 2021',
    description: 'Built and maintained websites for local businesses and startups. Handled full project lifecycle from design to deployment.',
    tech: ['React', 'WordPress', 'Tailwind'],
  },
];
