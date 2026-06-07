import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Confortímetro Klimaa Simulações",
  "description": "Aplicativo desenvolvido para realizar simulações personalizadas utilizando EnergyPlus e Python.",
  "author": "Gabriel Leite Bessa",
  "date": "2024-04-25T23:50:15-03:00",
  "tags": [],
  "categories": [],
  "order": 0,
  "github_url": "https://github.com/gaia-ufpel/confortimetro_klimaa_simulacoes",
  "slug": "confortimetro_klimaa_simulacoes"
};

export const content = ``;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="projects" />;
}
