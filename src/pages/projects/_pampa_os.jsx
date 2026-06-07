import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Pampa OS",
  "description": "Simulador de sistemas operacionais em desenvolvimento na Universidade Federal de Pelotas.",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:46:17-03:00",
  "tags": [],
  "categories": [],
  "order": 16,
  "slug": "pampa_os"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
