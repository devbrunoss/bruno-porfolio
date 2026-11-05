import { TechnologyList } from "@/components/TechnologyList";
import { Code2 } from "lucide-react";

export function AboutSection() {
  return <div id="sobre" className="about-page shell">
    <section className="about-intro" aria-labelledby="about-title">
      <p className="about-kicker">QUEM SOU EU</p>
      <h2 id="about-title">Sobre mim</h2>
      <div className="about-intro-copy">
        <p>Sou Bruno Santos e estudo cibersegurança com foco em segurança defensiva e segurança de aplicações (AppSec). Meu portfólio reúne ferramentas para análise de logs, identificação de possíveis segredos e avaliação de configurações HTTP/HTTPS.</p>
        <p>Também estudo desenvolvimento Full Stack com Next.js, TypeScript e PostgreSQL, explorando autenticação, validação no servidor e controle de acesso. Utilizo IA como apoio na estruturação e em partes da implementação dos projetos.</p>
      </div>
      <div className="about-stats">
        <div><strong>Projetos educacionais</strong><span>Aprendizado na prática</span></div>
        <div><strong>Documentação</strong><span>Decisões, testes e limitações</span></div>
      </div>
    </section>
    <section className="about-tech" aria-labelledby="about-tech-title">
      <p className="about-kicker">TECNOLOGIAS QUE USO E ESTUDO</p>
      <h2 id="about-tech-title" className="sr-only">Tecnologias e ferramentas</h2>
      <div className="tech-pills">
        {['Python', 'Linux', 'TCP/IP', 'DNS', 'Git', 'TypeScript', 'Next.js', 'PostgreSQL'].map((tech) => <span key={tech}><Code2 size={15} />{tech}</span>)}
      </div>
    </section>
    <section className="about-more">
      <div className="section-title-row"><div><p className="eyebrow">ESTUDOS E PRÁTICA</p><h2>Tecnologias e <span>ferramentas</span></h2></div><span className="section-count">01 — 04</span></div>
      <TechnologyList />
    </section>
  </div>;
}
