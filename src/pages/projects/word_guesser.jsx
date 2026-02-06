import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Word Guesser",
  "description": "Adivinha as palavras e ganhe pontos!",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:48:18-03:00",
  "tags": [],
  "categories": [],
  "order": 5,
  "github_url": "https://github.com/glbessa/WordGuesser",
  "website_url": "https://glbessa.github.io/WordGuesser",
  "slug": "word_guesser"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
