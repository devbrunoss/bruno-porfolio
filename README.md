# Bruno Santos — Portfólio

Portfólio pessoal com foco em cibersegurança defensiva, segurança de aplicações e aprendizado em desenvolvimento Full Stack.

## Conteúdo

- Início: apresentação e três projetos de segurança em destaque.
- Sobre: estudos, tecnologias e participação com apoio de IA.
- Projetos: SecretHunter, LogSentinel, WebSecure, DevTask e FinanceFlow.
- Contato: GitHub, LinkedIn e e-mail.

As artes dos projetos são composições gráficas, não capturas de execução. As ferramentas de segurança apontam para os respectivos repositórios, onde estão as instruções de uso e limitações. Os projetos iniciais de HTML/CSS continuam em seus próprios repositórios.

## Desenvolvimento local

Requer Node.js 20 ou superior e npm.

```sh
npm ci
npm run dev
```

## Verificação e build

```sh
npm run typecheck
npm run build
```

O build exporta o site estático para `out/`. O workflow existente em `.github/workflows/deploy.yml` publica essa pasta no GitHub Pages quando há alterações em `main`.

## Configuração

- `NEXT_PUBLIC_SITE_URL`: endereço público; padrão `https://brunosantos.site`.
- `NEXT_PUBLIC_CONTACT_EMAIL`: e-mail de contato; padrão configurado no componente de contato.
- `src/data/projects.ts`: seleção de projetos, tecnologias, escopo e links.

Os textos refletem projetos educacionais, desenvolvidos com apoio de IA na estruturação e em partes da implementação. Não representam experiência profissional em TI.
