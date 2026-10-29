import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { AboutSection } from "@/components/AboutSection";

export default function HomePage() {
  return (
    <>
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow"><span className="status-dot" /> Desenvolvedor &amp; entusiasta de tecnologia</p>
        <h1 id="hero-title">Transformando ideias em <span>projetos reais.</span></h1>
        <p className="hero-copy">Sou Bruno Santos, desenvolvedor em formação com interesse em programação, cibersegurança, análise de dados e inteligência artificial. Aprendo construindo projetos reais e transformando conhecimento em soluções práticas.</p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projetos">Ver projetos <ArrowUpRight size={17} /></Link>
          <Link className="button button-secondary" href="/contato">Falar comigo <MoveRight size={17} /></Link>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true"><span>PORTFÓLIO</span><span>2026 — BR</span></div>
    </section>
    <AboutSection />
    </>
  );
}