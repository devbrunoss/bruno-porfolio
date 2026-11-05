import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { AboutSection } from "@/components/AboutSection";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow"><span className="status-dot" /> Bruno Santos / Cibersegurança &amp; AppSec</p>
        <h1 id="hero-title">Segurança em foco.<br /><span>Aprendizado na prática.</span></h1>
        <p className="hero-copy">Estudo segurança defensiva e de aplicações por meio de projetos em Python e desenvolvimento web. Busco minha primeira oportunidade em TI, com interesse em segurança da informação e suporte técnico.</p>
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
          <Link className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">Código e documentação <ArrowUpRight size={16}/><span className="sr-only"> de {project.name} (nova aba)</span></Link>
        </article>
      ))}</div>
      <Link className="text-link all-projects" href="/projetos">Ver os cinco projetos <MoveRight size={16}/></Link>
    </section>
    <AboutSection />
    </>
  );
}