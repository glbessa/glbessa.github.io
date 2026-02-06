import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "DeepRAD",
  "description": "Projeto em desenvolvimento na Universidade Federal de Pelotas que busca explorar aplicações de inteligência artificial na área da odontologia.",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:45:45-03:00",
  "tags": [],
  "categories": [],
  "order": 2,
  "github_url": "https://github.com/gaia-ufpel/deeprad",
  "slug": "deeprad"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
