import { Code2, Database, ShieldCheck, Terminal } from "lucide-react";

const groups = [
 { icon: Code2, title: "Desenvolvimento web", level: "PRÁTICA E ESTUDO", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
 { icon: Database, title: "Programação e dados", level: "EM DESENVOLVIMENTO", items: ["Python", "Excel", "Power BI · em estudo"] },
 { icon: Terminal, title: "Ferramentas e sistemas", level: "FERRAMENTAS", items: ["Git", "GitHub", "Linux"] },
 { icon: ShieldCheck, title: "Infraestrutura e segurança", level: "FUNDAMENTOS", items: ["DNS", "TCP/IP", "Active Directory", "Fundamentos de cibersegurança"] }
];
export function TechnologyList() {
 return <div className="technology-grid">{groups.map(({icon:Icon,title,level,items},i)=><article className="technology-card" key={title}><div className="technology-top"><Icon size={20} strokeWidth={1.5}/><span>0{i+1}</span></div><p className="mini-label">{level}</p><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div>;
}