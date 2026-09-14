export const site = {
  name: 'Shaygan Shokrollahi',
  title: 'Software Engineer / Tech Lead / Product Builder',
  description:
    'Shaygan Shokrollahi is a software engineer, technical leader, and product builder focused on AI systems, backend architecture, and useful digital products.',
  url: 'https://sh-sh-dev.github.io',
  email: 'info@shaygan.tech',
  social: {
    github: 'https://github.com/sh-sh-dev',
    linkedin: 'https://www.linkedin.com/in/shaygan-shokrollahi/',
  },
  nav: [
    // { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    // { label: 'Notes', href: '/notes' },
  ],
  cta: { label: 'Let’s talk', href: '/contact' },
  metrics: [
    { value: '+100K', label: 'Users reached' },
    { value: 'Since 12', label: 'Coding and building' },
    { value: 'AI · Backend · Product', label: 'What I work across' },
  ],
  capabilities: [
    {
      title: 'Product engineering',
      description:
        'Turn an idea into a working, scalable product—from architecture and APIs to production and iteration.',
      tone: 'sand',
    },
    {
      title: 'Backend systems',
      description:
        'Design reliable APIs, queues, integrations, databases, and infrastructure for complex workflows.',
      tone: 'stone',
    },
    {
      title: 'AI engineering',
      description:
        'Build practical AI systems using RAG, OCR, knowledge graphs, reranking, embeddings, and model routing.',
      tone: 'sage',
    },
    {
      title: 'Technical leadership',
      description:
        'Guide technical decisions, structure teams, review architecture, and connect engineering work to product goals.',
      tone: 'ink',
    },
  ],
  experience: [
    {
      title: 'Technical Leadership',
      description:
        'Leading engineering decisions, architecture, and delivery as Tech Lead at Adad.',
    },
    {
      title: 'AI & Knowledge Systems',
      description:
        'Building retrieval-based and domain-specific AI—including Vindad AI for local-law legal work and AI features inside Adad’s legal-tech product.',
    },
    {
      title: 'Product & Platform Engineering',
      description:
        'Shipping product features and platforms across Karazma’s AI learning systems, Blueshell’s website and internal tools, and LS Fencing Club’s athlete management system.',
    },
    {
      title: 'Backend & Security-Critical Systems',
      description:
        'Working on performance, security, and reliability—including Vinsign’s PKI-based digital signatures, legal-tech backends at Vindad, and years of freelance backend delivery.',
    },
    {
      title: 'Digital Products',
      description:
        'Building websites and digital experiences with attention to usability, structure, and real business requirements—from Blueshell and LS Fencing Club to broader client work.',
    },
  ],
  technologies: [
    'Laravel',
    'PHP',
    'Python',
    'Livewire',
    'Tailwind CSS',
    'JavaScript',
    'RAG',
    'Qdrant',
    'OCR',
    'Knowledge Graphs',
    'OpenAI',
    'PKI',
    'CI/CD',
    'Docker',
    'MySQL',
    'Redis',
    'Queues',
    'APIs',
  ],
} as const;

/** Join a path with Astro's BASE_URL so links work with or without a `base` config. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  if (path.startsWith('#')) return path;
  if (path.startsWith('http') || path.startsWith('mailto:')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
