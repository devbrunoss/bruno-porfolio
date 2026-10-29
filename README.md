# Bruno Santos — Portfólio

Portfólio em Next.js, React, TypeScript e Tailwind CSS 4, preparado para exportação estática e publicação gratuita no GitHub Pages. Não precisa manter servidor rodando.

## Rodar no computador

Requer Node.js 20.9+ e npm.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Gerar a versão estática

```bash
npm install
npm run build
```

O site pronto para hospedagem será criado na pasta `out/`.

## Publicar no GitHub Pages

1. Crie um repositório chamado **`devbrunoss.github.io`** na conta GitHub `devbrunoss`.
2. Envie os arquivos deste projeto para a branch `main`.
3. No repositório, abra **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação.
4. O workflow em `.github/workflows/deploy.yml` fará o build e a publicação automaticamente a cada push na `main`.
5. O endereço esperado é `https://devbrunoss.github.io`.

## Personalização

- A logo enviada foi aplicada em `public/images/logo.png`.
- O favicon enviado foi aplicado em `public/favicon.png`.
- As prévias dos projetos são composições ilustrativas; troque-as por capturas reais quando quiser.
- O e-mail de contato só aparece quando `NEXT_PUBLIC_CONTACT_EMAIL` estiver configurado; nenhum endereço foi inventado.
- O site não é publicado até você enviar os arquivos e ativar o GitHub Pages.
