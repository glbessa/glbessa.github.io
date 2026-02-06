import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "NPB Rust",
  "description": "Benchmarks da NASA reimplementados em Rust.",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:51:07-03:00",
  "tags": [],
  "categories": [],
  "order": 15,
  "github_url": "https://github.com/glbessa/NPBRust",
  "slug": "npb_rust"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
