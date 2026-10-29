import { ContactLinks } from "@/components/ContactLinks";
import { ArrowUpRight, Code2, Network } from "lucide-react";

export const metadata = { title: "Contato | Bruno Santos", description: "Entre em contato com Bruno Santos e conheça seus perfis profissionais." };

const topics = [
  { icon: ArrowUpRight, title: "Oportunidades profissionais", text: "Disponível para conversar sobre oportunidades e projetos na área de tecnologia." },
  { icon: Code2, title: "Desenvolvimento", text: "Interesse em desenvolvimento web, programação e construção de produtos digitais." },
  { icon: Network, title: "Conexões", text: "Vamos trocar ideias sobre tecnologia, aprendizado e projetos." }
];

export default function ContatoPage() {
  return <div className="page-shell shell contact-page">
    <header className="page-heading"><p className="eyebrow">CONTATO & CONEXÕES</p><h1>Vamos <span>conversar.</span></h1><p className="lead">Estou aberto a oportunidades na área de tecnologia, propostas de trabalho, colaborações e conversas sobre desenvolvimento, programação e projetos.</p></header>
    <ContactLinks />
    <section className="contact-topics">{topics.map(({icon: Icon,title,text}) => <article className="topic-card" key={title}><Icon size={20} strokeWidth={1.5}/><h2>{title}</h2><p>{text}</p></article>)}</section>
  </div>;
}