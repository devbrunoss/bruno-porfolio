import { Code2, Database, ShieldCheck, Terminal } from "lucide-react";
const groups = [
  { icon: ShieldCheck, title: "Segurança defensiva e AppSec", level: "ESTUDOS E PROJETOS", items: ["Análise de logs", "Possíveis segredos", "Cabeçalhos HTTP", "Validação de entrada", "Controle de acesso"] },
  { icon: Terminal, title: "Sistemas e redes", level: "FUNDAMENTOS", items: ["Linux", "TCP/IP", "DNS", "Git", "GitHub"] },
  { icon: Code2, title: "Desenvolvimento web", level: "PRÁTICA E ESTUDO", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
  { icon: Database, title: "Programação e dados", level: "PRÁTICA E ESTUDO", items: ["Python", "SQL", "PostgreSQL", "Prisma", "Streamlit"] },
];
export function TechnologyList() {
  return <div className="technology-grid">{groups.map(({ icon: Icon, title, level, items }, i) => (
    <article className="technology-card" key={title}>
      <div className="technology-top"><Icon size={20} strokeWidth={1.5} /><span>0{i + 1}</span></div>
      <p className="mini-label">{level}</p><h3>{title}</h3>
      <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
    </article>
  ))}</div>;
}
