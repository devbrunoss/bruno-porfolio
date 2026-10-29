import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export const metadata = { title: "Projetos | Bruno Santos", description: "Projetos de prática e experimentação desenvolvidos por Bruno Santos." };

export default function ProjetosPage() {
  return <div className="page-shell shell">
    <header className="page-heading"><p className="eyebrow">SELEÇÃO DE TRABALHOS <span className="heading-count">/ 05 PROJETOS</span></p><h1>Projetos<span>.</span></h1><p className="lead">Projetos que desenvolvi para praticar, experimentar ideias e transformar conhecimento em aplicações reais.</p></header>
    <ProjectList projects={projects} />
  </div>;
}