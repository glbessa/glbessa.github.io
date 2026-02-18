# Portfolio & Landing Page - glbessa.dev

Este projeto é uma **Landing Page de Alta Conversão** desenvolvida para apresentar serviços de consultoria tecnológica e desenvolvimento de software (SaaS, IA e Infraestrutura).

## Principais Características

1.  **Arquitetura Baseada em Dados:** Todo o conteúdo dinâmico (textos, links, projetos e FAQs) é centralizado em `src/data/index.js`, permitindo atualizações rápidas sem mexer na estrutura dos componentes.
2.  **Design Premium e Moderno:**
    -   **Bento Grid:** Utilizado para apresentar serviços de forma clara e visualmente atraente.
    -   **Glassmorphism:** Estética Dark Mode com elementos de vidro e desfoque de fundo.
    -   **Micro-animações:** Feedback visual fluído e transições suaves utilizando Framer Motion.
3.  **Foco em Conversão:** Layout otimizado para transformar visitantes em leads, com chamadas para ação (CTAs) estratégicas e seções de prova social (logotipos de empresas).
4.  **Performance SPA:** Aplicação Single Page Application (SPA) ultra rápida com carregamento dinâmico de rotas para posts e projetos.

## Tecnologias

- **Core:** React 18, Vite
- **CSS:** TailwindCSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Markdown:** React-markdown (para suporte a conteúdos estáticos)
- **Roteamento:** React Router DOM

## Estrutura de Pastas

- `src/components/`: Componentes modulares e reutilizáveis (Navbar, Bento Grids, Footer).
- `src/data/`: Central de dados e configurações do site.
- `src/pages/`: Páginas principais e templates de rotas dinâmicas.

## Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a versão de produção na pasta `dist/`.
- `npm run preview`: Visualiza o build de produção localmente.
