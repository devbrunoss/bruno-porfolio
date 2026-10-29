import { TechnologyList } from "@/components/TechnologyList";
import { Code2 } from "lucide-react";

export function AboutSection() {
  return <div id="sobre" className="about-page shell">
    <section className="about-intro" aria-labelledby="about-title">
      <p className="about-kicker">QUEM SOU EU</p>
      <h1 id="about-title">Sobre</h1>
      <div className="about-intro-copy">
        <p>Sou Bruno Santos, desenvolvedor em formação e entusiasta de tecnologia. Construo projetos para colocar o aprendizado em prática, explorar novas ferramentas e transformar ideias em soluções reais. Tenho interesse especial em desenvolvimento web, programação, cibersegurança, análise de dados e inteligência artificial.</p>
        <p>Gosto de aprender fazendo, documentar minha evolução e buscar sempre a próxima coisa que posso construir.</p>
      </div>
      <div className="about-stats">
        <div><strong>Projetos reais</strong><span>Aprendizado na prática</span></div>
        <div><strong>Todo dia</strong><span>Curiosidade em evolução</span></div>
      </div>
    </section>
    <section className="about-tech" aria-labelledby="about-tech-title">
      <p className="about-kicker">TECNOLOGIAS QUE USO E ESTUDO</p>
      <h2 id="about-tech-title" className="sr-only">Tecnologias e ferramentas</h2>
      <div className="tech-pills">
        {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Python', 'Git', 'Linux'].map((tech) => <span key={tech}><Code2 size={15} />{tech}</span>)}
      </div>
    </section>
    <section className="about-more">
      <div className="section-title-row"><div><p className="eyebrow">FERRAMENTAS DO DIA A DIA</p><h2>Tecnologias e <span>ferramentas</span></h2></div><span className="section-count">01 — 04</span></div>
      <TechnologyList />
    </section>
  </div>;
}
