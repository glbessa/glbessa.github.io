import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Autenticação Facial com Redes Siamesas",
  "author": "Gabriel Leite Bessa",
  "date": "2024-05-13T01:16:42-03:00",
  "tags": [],
  "categories": [
    "redes neurais"
  ],
  "slug": "autenticacao_facial_com_redes_siamesas"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="posts" />;
}
