 "use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [{ href: "/#sobre", label: "Sobre" }, { href: "/projetos", label: "Projetos" }, { href: "/contato", label: "Contato" }];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setMenuOpen(false), [pathname]);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="header-inner shell">
      <Link className="brand-mark" href="/" aria-label="Bruno Santos — página inicial">
        <img src="/images/logo.png" alt="" className="brand-image" />
      </Link>
      <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Navegação principal">
        {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href || (link.href === "/#sobre" && pathname === "/sobre") ? "page" : undefined} className={pathname === link.href || (link.href === "/#sobre" && pathname === "/sobre") ? "active" : ""}>{link.label}</Link>)}
      </nav>
      <button className="mobile-menu" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
    </div>
  </header>;
}