import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return <footer className="site-footer"><div className="footer-inner shell"><p>© 2026 Bruno Santos. Todos os direitos reservados.</p><div className="footer-links"><Link href="https://www.linkedin.com/in/brunosantossdev/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13}/></Link><Link href="https://github.com/devbrunoss" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13}/></Link></div></div></footer>;
}