import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card ${index === 0 ? "project-featured" : ""}`}>
    <a className={`project-preview preview-${project.slug}`} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.name} em nova aba`}>
      <div className="preview-top"><span className="preview-dots"><i/><i/><i/></span><span className="preview-label">PRÉVIA ILUSTRATIVA</span></div>
      <div className="preview-art">
        <span className="preview-number">0{index + 1}</span>
        <span className="preview-title">{project.previewTitle}</span>
        <span className="preview-subtitle">{project.previewSubtitle}</span>
        <span className="preview-mark">{project.mark}</span>
      </div>
      <span className="preview-note">Substituir por captura real do projeto</span>
    </a>
    <div className="project-info">
      <div className="project-meta"><span>PROJETO {String(index + 1).padStart(2,"0")}</span>{project.featured && <span className="featured-label">DESTAQUE</span>}</div>
      <h2>{project.name}</h2><p>{project.description}</p>
      {project.technologies?.length ? <ul className="tag-list">{project.technologies.map(t => <li key={t}>{t}</li>)}</ul> : <p className="tech-pending">Tecnologias a confirmar</p>}
      <div className="project-links"><Link className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">Ver projeto <ArrowUpRight size={16}/></Link>{project.repository && <Link className="text-link secondary-link" href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={15}/> Código no GitHub</Link>}</div>
    </div>
  </article>;
}