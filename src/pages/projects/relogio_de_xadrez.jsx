import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Relógio de Xadrez",
  "description": "Relógio de xadrez mobile.",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:44:10-03:00",
  "tags": [],
  "categories": [],
  "order": 7,
  "github_url": "https://github.com/glbessa/RelogioDeXadrez",
  "slug": "relogio_de_xadrez"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
