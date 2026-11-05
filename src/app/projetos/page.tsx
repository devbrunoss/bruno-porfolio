import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata = { title: "Projetos | Bruno Santos", description: "Projetos de prática e experimentação desenvolvidos por Bruno Santos." };

export default function ProjetosPage() {
  return <div className="page-shell shell">
    <header className="page-heading"><p className="eyebrow">PROJETOS EDUCACIONAIS <span className="heading-count">/ {String(projects.length).padStart(2, "0")} PROJETOS</span></p><h1>Projetos<span>.</span></h1><p className="lead">Projetos de estudo em segurança defensiva e desenvolvimento Full Stack, com apoio de IA na estruturação e em partes da implementação. Cada repositório documenta seu escopo e suas limitações.</p></header>
    <ProjectList projects={projects} />
  </div>;
}
