import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { AboutSection } from "@/components/AboutSection";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow"><span className="status-dot" /> Cibersegurança &amp; AppSec / Desenvolvedor Full Stack</p>
        <h1 id="hero-title">Segurança em foco.<br /><span>Aprendizado na prática.</span></h1>
        <p className="hero-copy">Sou Bruno Santos. Estudo cibersegurança e desenvolvimento Full Stack por meio de ferramentas em Python e aplicações com Next.js, TypeScript e PostgreSQL. Busco minha primeira oportunidade em TI, conectando desenvolvimento web e segurança de aplicações.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projetos">Explorar projetos <ArrowUpRight size={17} /></Link>
          <Link className="button button-secondary" href="/contato">Falar comigo <MoveRight size={17} /></Link>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true"><span>PORTFÓLIO</span><span>2026 — BR</span></div>
    </section>
    <section className="home-projects shell" aria-labelledby="home-projects-title">
      <div className="section-title-row"><div><p className="eyebrow">SEGURANÇA NA PRÁTICA</p><h2 id="home-projects-title">Projetos em <span>destaque</span></h2></div></div>
      <div className="home-project-grid">{projects.filter(project => project.featured).map(project => (
        <article key={project.slug} className="home-project-card">
          <span className="about-kicker">{project.mark}</span><h3>{project.name}</h3><p>{project.description}</p>
          <div className="home-project-links"><Link className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">Código e documentação <ArrowUpRight size={16}/><span className="sr-only"> de {project.name} (nova aba)</span></Link>{project.url && <Link className="text-link secondary-link" href={project.url} target="_blank" rel="noopener noreferrer">Demonstração <ArrowUpRight size={16}/><span className="sr-only"> de {project.name} (nova aba)</span></Link>}</div>
        </article>
      ))}</div>
      <Link className="text-link all-projects" href="/projetos">Ver todos os projetos <MoveRight size={16}/></Link>
    </section>
    <AboutSection />
    </>
  );
}