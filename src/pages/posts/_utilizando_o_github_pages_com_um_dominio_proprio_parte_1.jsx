import React from 'react';
import PostDetailLayout from '../../components/PostDetailLayout';

export const metadata = {
  "title": "Utilizando o Github Pages com um Domínio Próprio: Parte 1",
  "author": "Gabriel Leite Bessa",
  "date": "2024-05-12T20:32:10-03:00",
  "tags": [
    "web",
    "website",
    "github-pages",
    "tls",
    "ssl"
  ],
  "categories": [
    "web"
  ],
  "slug": "utilizando_o_github_pages_com_um_dominio_proprio_parte_1"
};

export const content = `Olá a todos!

Nesse post irei demonstrar como fazer deploy do site no Github Pages, comprar um domínio, transferir ele para a CloudFlare, configurar ele no Github Pages e utilizar o certificado TLS/SSL da CloudFlare.

## Iniciando com Github Pages

Primeiramente precisamos criar um site que pode ser algo bem simples por enquanto. Lembrando que é necessário que ter uma conta no Github já. O Github disponibiliza para todos os usuários criarem um repositório especial com o nome <username\>.github.io no qual é possível 

## Comprando um domínio

## Transferindo o domínio para a CloudFlare

## Configurando o domínio no Github Pages

## Utilizando o certificado TLS/SSL

## Referências

[https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

[https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

[https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

[https://www.youtube.com/watch?v=rIXWUJ5U8bY](https://www.youtube.com/watch?v=rIXWUJ5U8bY)

[https://gist.github.com/cvan/8630f847f579f90e0c014dc5199c337b](https://gist.github.com/cvan/8630f847f579f90e0c014dc5199c337b)

[https://www.youtube.com/watch?v=f3X-hYRxBL8](https://www.youtube.com/watch?v=f3X-hYRxBL8)`;

export default function Post() {
  return <PostDetailLayout data={{...metadata, content}} type="posts" />;
}
