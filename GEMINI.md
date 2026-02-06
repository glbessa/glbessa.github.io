# Gemini CLI Refactor

Este projeto foi refatorado de **Hugo** para **Vite + React** utilizando o Gemini CLI.

## Mudanças Realizadas

1.  **Migração de Framework:** O projeto agora utiliza React 18 com Vite para um desenvolvimento mais rápido e moderno.
2.  **Transformação de Conteúdo:** O conteúdo original em Markdown foi migrado para componentes React estáticos e os dados de configuração (YAML) foram consolidados em constantes globais (`src/data/index.js`). A pasta `data/` original foi removida.
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
