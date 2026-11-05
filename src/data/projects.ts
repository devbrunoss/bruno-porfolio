export type ProjectCategory = "ciberseguranca" | "fullstack";
export type CategoryInfo = { id: ProjectCategory; title: string; eyebrow: string; description: string };
export const categories: CategoryInfo[] = [
  { id: "ciberseguranca", title: "Cibersegurança", eyebrow: "SEGURANÇA DEFENSIVA E APPSEC", description: "Projetos educacionais de segurança defensiva, AppSec e investigação digital. Resultados e registros exigem revisão humana." },
  { id: "fullstack", title: "Desenvolvimento Full Stack", eyebrow: "APLICAÇÕES WEB", description: "Projetos para estudar autenticação, validação no servidor e controle de acesso por usuário." },
];
export type Project = {
  slug: string;
  category: ProjectCategory;
  name: string;
  description: string;
  url?: string;
  repository: string;
  technologies: string[];
  previewTitle: string;
  previewSubtitle: string;
  mark: string;
  featured?: boolean;
  scope: string;
  highlights: string[];
};
export const projects: Project[] = [
  {
    slug: "secrethunter", category: "ciberseguranca", name: "SecretHunter",
    description: "CLI em Python para identificar possíveis segredos em arquivos e no histórico Git. Inclui ocultação de valores, baseline para comparação e relatórios JSON/SARIF.",
    url: "https://devbrunoss.github.io/SecretHunter/",
    repository: "https://github.com/devbrunoss/SecretHunter",
    technologies: ["Python", "Git", "JSON", "SARIF"],
    previewTitle: "SecretHunter", previewSubtitle: "ARQUIVOS → ACHADOS → TRIAGEM", mark: "SH", featured: true,
    scope: "Não valida se uma credencial está ativa. Falsos positivos e falsos negativos são esperados.",
    highlights: ["Arquivos e histórico Git", "Relatórios com valores ocultados", "Baseline e testes automatizados"],
  },
  {
    slug: "logsentinel", category: "ciberseguranca", name: "LogSentinel",
    description: "Analisador local de logs CSV/JSONL, com interface Streamlit e regras determinísticas para falhas de autenticação, concentração de eventos e condições personalizadas.",
    url: "https://logsentinel-devbrunoss.streamlit.app/",
    repository: "https://github.com/devbrunoss/logsentinel",
    technologies: ["Python", "Streamlit", "Pandas", "pytest"],
    previewTitle: "LogSentinel", previewSubtitle: "LOGS → REGRAS → ALERTAS", mark: "LS", featured: true,
    scope: "Utiliza logs de laboratório. Um alerta é uma pista para revisão, não uma confirmação de ataque.",
    highlights: ["Normalização de eventos em UTC", "Regras com janelas configuráveis", "Exportação CSV e JSON"],
  },
  {
    slug: "websecure", category: "ciberseguranca", name: "WebSecure",
    description: "Scanner defensivo de configuração HTTP/HTTPS. Analisa cabeçalhos de segurança e atributos de cookies, valida destinos e redirecionamentos e exporta relatórios JSON/HTML.",
    url: "https://websecure-78zh.onrender.com/",
    repository: "https://github.com/devbrunoss/websecure",
    technologies: ["Python", "HTTP/HTTPS", "JSON", "pytest"],
    previewTitle: "WebSecure", previewSubtitle: "HTTP/HTTPS → ANÁLISE → RELATÓRIO", mark: "WS", featured: true,
    scope: "Para sites próprios ou autorizados. Os achados são heurísticos e não comprovam vulnerabilidades exploráveis.",
    highlights: ["Cabeçalhos e atributos de cookies", "Validação de destinos e redirects", "CLI e interface local"],
  },
  {
    slug: "forenselab", category: "ciberseguranca", name: "ForenseLab",
    description: "Plataforma educacional de investigação digital para organizar casos e evidências, verificar integridade por SHA-256 e acompanhar a linha do tempo das análises.",
    url: "https://forenselab-web.onrender.com/",
    repository: "https://github.com/devbrunoss/ForenseLab",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "SQLite", "SHA-256"],
    previewTitle: "ForenseLab", previewSubtitle: "CASOS / EVIDÊNCIAS / INTEGRIDADE", mark: "FL",
    scope: "Demo compartilhada, sem isolamento entre visitantes. Use apenas arquivos fictícios. O hash não comprova autenticidade nem cadeia de custódia formal.",
    highlights: ["Registro de casos e evidências", "Verificação SHA-256 e histórico de auditoria", "Linha do tempo e relatórios HTML/JSON"],
  },
  {
    slug: "devtask", category: "fullstack", name: "DevTask",
    description: "Organização de tarefas por status, prioridade, categoria e prazo. Explora autenticação por sessão, validação no servidor e dados isolados por usuário.",
    url: "https://devtask-sigma.vercel.app/",
    repository: "https://github.com/devbrunoss/devtask",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Zod"],
    previewTitle: "DevTask", previewSubtitle: "TAREFAS / CATEGORIAS / PRAZOS", mark: "DT",
    scope: "Projeto educacional sem recuperação de senha ou MFA. Use dados fictícios na demonstração.",
    highlights: ["Sessões e senhas com hash", "Controle de acesso no servidor", "Testes unitários e de fluxos críticos"],
  },
  {
    slug: "financeflow", category: "fullstack", name: "FinanceFlow",
    description: "Controle financeiro pessoal com receitas, despesas, orçamentos e metas. Utiliza cálculos com precisão decimal, autenticação e exportação de transações em CSV.",
    url: "https://financeflow-sable-pi.vercel.app/",
    repository: "https://github.com/devbrunoss/financeflow",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Better Auth", "Vitest"],
    previewTitle: "FinanceFlow", previewSubtitle: "RECEITAS / DESPESAS / METAS", mark: "F$",
    scope: "Registros manuais, sem conexão com bancos ou movimentação de dinheiro. Use dados fictícios na demonstração.",
    highlights: ["Orçamentos por categoria", "Metas e contribuições", "Validação e testes de regras financeiras"],
  },
];
