import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bruno Santos | Cibersegurança e Desenvolvimento Web",
  description: "Projetos educacionais de Bruno Santos em segurança defensiva, AppSec, Python e desenvolvimento Full Stack.",
  applicationName: "Bruno Santos Portfolio",
  openGraph: {
    title: "Bruno Santos | Cibersegurança e Desenvolvimento Web",
    description: "Projetos e estudos em cibersegurança, Python e desenvolvimento web.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/logo.png", alt: "Logo de Bruno Santos" }]
  },
  icons: { icon: [{ url: "/favicon.png", type: "image/png" }], apple: [{ url: "/favicon.png", type: "image/png" }] },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brunosantos.site")
};
export const viewport: Viewport = { themeColor: "#080808", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header /><main>{children}</main><Footer /></body></html>;
}