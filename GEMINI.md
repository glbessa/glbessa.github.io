# Gemini CLI Refactor

Este projeto foi refatorado de **Hugo** para **Vite + React** utilizando o Gemini CLI.

## Mudanças Realizadas

1.  **Migração de Framework:** O projeto agora utiliza React 18 com Vite para um desenvolvimento mais rápido e moderno.
2.  **Preservação de Conteúdo:** Os arquivos Markdown em `content/` foram mantidos. Um carregador dinâmico em `src/lib/content.js` processa esses arquivos e converte shortcodes do Hugo para Markdown padrão.
3.  **Interface:** Implementada uma nova UI responsiva utilizando `react-bootstrap`.
4.  **Roteamento:** Navegação via `react-router-dom` para Home, Posts e Projetos.

## Tecnologias

- **Frontend:** React, Vite
- **Estilização:** Bootstrap 5, Sass
- **Conteúdo:** Gray-matter (frontmatter), React-markdown
- **Build:** Vite

## Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a versão de produção na pasta `dist/`.
- `npm run preview`: Visualiza o build de produção localmente.
