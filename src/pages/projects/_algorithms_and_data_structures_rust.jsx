import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Algoritmos e Estruturas de Dados em Rust",
  "description": "Algoritmos e estruturas de dados feitos em Rust.",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:49:26-03:00",
  "tags": [],
  "categories": [],
  "order": 17,
  "github_url": "https://github.com/glbessa/algorithms_and_data_structures_rust",
  "slug": "algorithms_and_data_structures_rust"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
