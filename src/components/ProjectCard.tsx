import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card ${project.featured ? "project-featured" : ""}`}>
    <div className={`project-preview preview-${project.slug}`} aria-hidden="true">
      <div className="preview-top"><span className="preview-dots"><i/><i/><i/></span><span className="preview-label">{project.category === "ciberseguranca" ? "SEGURANÇA / PYTHON" : "DESENVOLVIMENTO / WEB"}</span></div>
      <div className="preview-art">
        <span className="preview-number">{String(index + 1).padStart(2, "0")} / PROJETO EDUCACIONAL</span>
        <span className="preview-title">{project.previewTitle}</span>
        <span className="preview-subtitle">{project.previewSubtitle}</span>
        <span className="preview-mark">{project.mark}</span>
      </div>
      <span className="preview-note">{project.technologies.slice(0, 3).join(" / ")}</span>
    </div>
    <div className="project-info">
      <div className="project-meta"><span>PROJETO {String(index + 1).padStart(2,"0")}</span>{project.featured && <span className="featured-label">SEGURANÇA</span>}</div>
      <h3>{project.name}</h3><p>{project.description}</p>
      <ul className="project-highlights">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
      <ul className="tag-list">{project.technologies.map(t => <li key={t}>{t}</li>)}</ul>
      <p className="project-scope">{project.scope}</p>
      <div className="project-links">
        <Link className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={15}/> Código e documentação <ArrowUpRight size={16}/><span className="sr-only"> de {project.name} (nova aba)</span></Link>
        {project.url && <Link className="text-link secondary-link" href={project.url} target="_blank" rel="noopener noreferrer">Demonstração <ArrowUpRight size={16}/><span className="sr-only"> de {project.name} (nova aba)</span></Link>}
      </div>
    </div>
  </article>;
}
