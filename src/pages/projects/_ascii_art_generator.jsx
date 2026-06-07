import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "ASCII Art Generator",
  "description": "Converta imagens em arte ASCII.",
  "problem": "Necessidade de criação de conteúdo visual alternativo para marketing técnico e documentação em formato texto.",
  "solution": "Script Python que utiliza processamento de imagem para converter pixels em caracteres ASCII com alta fidelidade.",
  "impact": "Ferramenta criativa para automação de design e branding técnico.",
  "category": "Automação",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:50:40-03:00",
  "tags": [
    "Python",
    "Imagem",
    "CLI"
  ],
  "categories": [],
  "order": 12,
  "github_url": "https://github.com/glbessa/ASCIIArtGenerator",
  "slug": "ascii_art_generator"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
