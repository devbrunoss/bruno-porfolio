 "use client";
import Link from "next/link";
import { Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function ContactLinks() {
 const [copied,setCopied]=useState(false);
 const email=process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "brunosantoss.dev@gmail.com";
 async function copyEmail() {
   if (!email) return;
   try { await navigator.clipboard.writeText(email); setCopied(true); window.setTimeout(()=>setCopied(false),2200); }
   catch { setCopied(false); }
 }
 return <section className="contact-links" aria-label="Perfis e contato">
  <Link className="contact-link-card" href="https://github.com/devbrunoss" target="_blank" rel="noopener noreferrer"><span className="contact-link-icon"><Github size={21}/></span><span><small>MEUS CÓDIGOS</small><strong>GitHub</strong><em>github.com/devbrunoss</em></span><ArrowUpRight className="contact-arrow" size={18}/></Link>
  <Link className="contact-link-card" href="https://www.linkedin.com/in/brunosantossdev/" target="_blank" rel="noopener noreferrer"><span className="contact-link-icon"><Linkedin size={21}/></span><span><small>PERFIL PROFISSIONAL</small><strong>LinkedIn</strong><em>linkedin.com/in/brunosantossdev</em></span><ArrowUpRight className="contact-arrow" size={18}/></Link>
  {email ? <button className="contact-link-card email-card" type="button" onClick={copyEmail}><span className="contact-link-icon">{copied?<Check size={21}/>:<Copy size={21}/>}</span><span><small>{copied?"COPIADO PARA A ÁREA DE TRANSFERÊNCIA":"CONTATO POR E-MAIL"}</small><strong>{copied?"E-mail copiado":email}</strong><em>{copied?"Pronto para colar":"Clique para copiar"}</em></span>{copied?<Check className="contact-arrow success-icon" size={18}/>:<Copy className="contact-arrow" size={18}/>}</button> : <div className="email-pending"><span className="contact-link-icon"><Copy size={20}/></span><span><small>CONTATO POR E-MAIL</small><strong>E-mail profissional</strong><em>Será adicionado posteriormente.</em></span></div>}
 </section>;
}