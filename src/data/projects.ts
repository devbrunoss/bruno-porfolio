export type ProjectCategory = "fullstack" | "ciberseguranca" | "web";

export type CategoryInfo = {
  id: ProjectCategory;
  title: string;
  eyebrow: string;
  description: string;
};

// A ordem desta lista define a ordem das seções na página
export const categories: CategoryInfo[] = [
  {
    id: "fullstack",
    title: "Full Stack",
    eyebrow: "APLICAÇÕES COMPLETAS",
    description:
      "Aplicações com autenticação, banco de dados e deploy, cobrindo do front-end ao back-end.",
  },
  {
    id: "ciberseguranca",
    title: "Cibersegurança",
    eyebrow: "SEGURANÇA DEFENSIVA",
    description:
      "Projetos focados em práticas defensivas, análise de segurança web e monitoramento de logs.",
  },
  {
    id: "web",
    title: "Desenvolvimento Web",
    eyebrow: "FRONT-END",
    description:
      "Interfaces e experimentos com HTML, CSS e JavaScript, focados em layout, interatividade e experiência do usuário.",
  },
];

export type Project = {
  slug: string;
  category: ProjectCategory;
  name: string;
  description: string;
  url: string;
  repository?: string;
  technologies?: string[];
  previewTitle: string;
  previewSubtitle: string;
  mark: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "trackcrypto",
    category: "web",
    name: "TrackCrypto",
    description:
      "Projeto voltado ao mercado de criptomoedas, com uma interface dedicada ao acompanhamento do mercado e à apresentação de informações relacionadas a ativos digitais.",
    url: "https://devbrunoss.github.io/trackcrypto/",
    repository: "https://github.com/devbrunoss/trackcrypto",
    technologies: ["HTML", "CSS", "JavaScript"],
    previewTitle: "TrackCrypto",
    previewSubtitle: "CRYPTO MARKET / ASSETS",
    mark: "₿",
    featured: true,
  },
  {
    slug: "qual-jogo-hoje",
    category: "web",
    name: "Qual Jogo Hoje",
    description:
      "Aplicação interativa criada para ajudar jogadores a decidir o que jogar, explorando lógica de programação, interatividade e experiência do usuário.",
    url: "https://devbrunoss.github.io/qual-jogo-hoje/",
    repository: "https://github.com/devbrunoss/qual-jogo-hoje",
    technologies: ["HTML", "CSS", "JavaScript"],
    previewTitle: "Qual jogo hoje?",
    previewSubtitle: "ENCONTRE SUA PRÓXIMA PARTIDA",
    mark: "?",
  },
  {
    slug: "infinity-electronics",
    category: "web",
    name: "Infinity Electronics",
    description:
      "Projeto demonstrativo de uma loja de tecnologia, com foco na apresentação de produtos, organização de catálogo e experiência visual de um e-commerce.",
    url: "https://devbrunoss.github.io/infinityeletronics/",
    technologies: ["HTML", "CSS", "JavaScript"],
    previewTitle: "Infinity Electronics",
    previewSubtitle: "TECH / CATALOG",
    mark: "∞",
  },
  {
    slug: "dopamine-clicker",
    category: "web",
    name: "Dopamine Clicker",
    description:
      "Mini game experimental baseado em cliques, desenvolvido para explorar interatividade, pontuação e elementos de gamificação.",
    url: "https://devbrunoss.github.io/DOPAMINE-CLICKER/",
    technologies: ["HTML", "CSS", "JavaScript"],
    previewTitle: "Dopamine Clicker",
    previewSubtitle: "CLICK / SCORE / REPEAT",
    mark: "+",
  },
  {
    slug: "bsdev-store",
    category: "web",
    name: "BSDev Store",
    description:
      "Landing page demonstrativa com foco na apresentação visual de produtos de tecnologia, animações, composição de layout e elementos promocionais.",
    url: "https://devbrunoss.github.io/landing-page-animacoes/",
    technologies: ["HTML", "CSS", "JavaScript"],
    previewTitle: "BSDev Store",
    previewSubtitle: "TECH GOODS / FEATURED",
    mark: "BS",
  },
  {
    slug: "devtask",
    category: "fullstack",
    name: "DevTask",
    description:
      "Aplicação Full Stack para organização de tarefas, com autenticação, validação de dados e persistência em banco de dados relacional.",
    url: "https://devtask-sigma.vercel.app/",
    repository: "https://github.com/devbrunoss/devtask",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "SQL",
      "Zod",
      "bcrypt",
    ],
    previewTitle: "DevTask",
    previewSubtitle: "FULL STACK / TASK MANAGEMENT",
    mark: "DT",
    featured: true,
  },
  {
    slug: "financeflow",
    category: "fullstack",
    name: "FinanceFlow",
    description:
      "Aplicação Full Stack de gestão financeira, com interface para acompanhamento de informações financeiras e recursos de autenticação e persistência de dados.",
    url: "https://financeflow-sable-pi.vercel.app/dashboard",
    repository: "https://github.com/devbrunoss/financeflow",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "SQL",
      "PostgreSQL",
      "Better Auth",
      "Zod",
      "Vitest",
      "Recharts",
    ],
    previewTitle: "FinanceFlow",
    previewSubtitle: "FULL STACK / FINANCIAL MANAGEMENT",
    mark: "F$",
    featured: true,
  },
  {
    slug: "secrethunter",
    category: "ciberseguranca",
    name: "SecretHunter",
    description:
      "Ferramenta defensiva em Python para identificar possíveis credenciais expostas em arquivos e no histórico Git, com resultados mascarados e relatórios em JSON e SARIF.",
    url: "https://devbrunoss.github.io/SecretHunter/",
    repository: "https://github.com/devbrunoss/SecretHunter",
    technologies: ["Python", "Git", "JSON", "SARIF"],
    previewTitle: "SecretHunter",
    previewSubtitle: "SECRET DETECTION / CODE SECURITY",
    mark: "SH",
    featured: true,
  },
  {
    slug: "websecure",
    category: "ciberseguranca",
    name: "WebSecure",
    description:
      "Projeto de segurança web desenvolvido com Python e Flask, com foco em práticas defensivas, análise de aspectos de segurança e apresentação de resultados.",
    url: "https://websecure-78zh.onrender.com/",
    repository: "https://github.com/devbrunoss/websecure",
    technologies: ["Python", "Flask", "HTML", "CSS", "JSON", "Pytest"],
    previewTitle: "WebSecure",
    previewSubtitle: "WEB SECURITY / DEFENSIVE PRACTICES",
    mark: "WS",
    featured: true,
  },
  {
    slug: "forenselab",
    category: "ciberseguranca",
    name: "ForenseLab",
    description:
      "Plataforma de investigação digital para organizar casos e evidências, acompanhar sua integridade e manter a rastreabilidade das análises em um ambiente de demonstração.",
    url: "https://forenselab-web.onrender.com/",
    previewTitle: "ForenseLab",
    previewSubtitle: "DIGITAL FORENSICS / EVIDENCE MANAGEMENT",
    mark: "FL",
  },
  {
    slug: "logsentinel",
    category: "ciberseguranca",
    name: "LogSentinel",
    description:
      "Ferramenta de análise de logs com Python e Streamlit, voltada à exploração de registros, organização de eventos e identificação de padrões relevantes para monitoramento.",
    url: "https://logsentinel-devbrunoss.streamlit.app/",
    repository: "https://github.com/devbrunoss/logsentinel",
    technologies: ["Python", "Streamlit", "Pandas", "CSV", "JSON Lines", "Pytest"],
    previewTitle: "LogSentinel",
    previewSubtitle: "LOG ANALYSIS / SECURITY MONITORING",
    mark: "LS",
    featured: true,
  },
];
