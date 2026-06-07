import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "ASCII Dungeon",
  "description": "Explore uma dungeon em ASCII com monstros e outras criaturas e obtenha armas melhores para enfrentar o boss final!",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:51:42-03:00",
  "tags": [],
  "categories": [],
  "order": 11,
  "github_url": "https://github.com/glbessa/ascii_dungeon",
  "slug": "ascii_dungeon"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
