import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "IMDb Web Scraping",
  "description": "Escolha alatóriamente entre os melhores filmes segundo o IMDb.",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:52:23-03:00",
  "tags": [],
  "categories": [],
  "order": 9,
  "github_url": "https://github.com/glbessa/IMDbWebScraping",
  "slug": "imdb_web_scraping"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
