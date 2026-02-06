import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Password Generator",
  "description": "Gerador de senhas seguro em Python.",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:52:53-03:00",
  "tags": [],
  "categories": [],
  "order": 18,
  "github_url": "https://github.com/glbessa/PasswordGenerator",
  "slug": "password_generator"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
