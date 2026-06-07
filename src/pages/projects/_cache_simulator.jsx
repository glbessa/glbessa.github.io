import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Cache Simulator",
  "description": "Simulador de uma arquitetura de cache podendo ser usados vários níveis e diferentes algoritmos.",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:50:15-03:00",
  "tags": [],
  "categories": [],
  "order": 10,
  "github_url": "https://github.com/glbessa/CacheSimulator",
  "slug": "cache_simulator"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
