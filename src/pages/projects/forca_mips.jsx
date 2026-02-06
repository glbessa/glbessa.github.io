import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Forca MIPS",
  "description": "Jogo da forca desenvolvido para o simulador e assembler MARS!",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:50:49-03:00",
  "tags": [],
  "categories": [],
  "order": 14,
  "github_url": "https://github.com/glbessa/ForcaMIPS",
  "slug": "forca_mips"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
