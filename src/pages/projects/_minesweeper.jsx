import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Minesweeper",
  "description": "Jogo de campo minado feito em Elixir.",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:47:15-03:00",
  "tags": [],
  "categories": [],
  "order": 8,
  "github_url": "https://github.com/glbessa/minesweeper",
  "slug": "minesweeper"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
