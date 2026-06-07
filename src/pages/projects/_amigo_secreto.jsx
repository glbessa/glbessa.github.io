import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Amigo Secreto",
  "description": "Sorteador de amigo secreto, sorteie e mande para os integrantes.",
  "problem": "Sorteios manuais de amigo secreto são lentos e propensos a falhas (como alguém tirar a si mesmo), especialmente em equipes de empresas.",
  "solution": "Aplicação web intuitiva que automatiza o sorteio e facilita a comunicação entre os participantes.",
  "impact": "Automatização simples que elimina o desperdício de tempo em eventos corporativos de integração.",
  "category": "Automação",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:49:49-03:00",
  "tags": [
    "Web",
    "Javascript"
  ],
  "categories": [],
  "order": 6,
  "github_url": "https://github.com/glbessa/AmigoSecreto",
  "website_url": "https://glbessa.github.io/AmigoSecreto",
  "slug": "amigo_secreto"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
