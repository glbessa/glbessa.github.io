import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Utilizando o Github Pages com um Domínio Próprio: Parte 3",
  "author": "Gabriel Leite Bessa",
  "date": "2024-05-12T21:08:35-03:00",
  "tags": [
    "web",
    "website",
    "github-pages",
    "tls",
    "ssl"
  ],
  "categories": [
    "web"
  ],
  "slug": "utilizando_o_github_pages_com_um_dominio_proprio_parte_3"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="posts" />;
}
