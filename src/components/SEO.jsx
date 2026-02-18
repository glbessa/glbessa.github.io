import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export default function SEO({ title, description, url, image, type = 'website' }) {
  // Construct absolute URL for image if provided
  // Assuming the site is hosted at the root or we have a base URL variable.
  // Ideally, we should pull the base URL from env or data.
  const siteUrl = 'https://glbessa.dev'; 
  const imageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : null;
  const canonicalUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : siteUrl;

  const fullTitle = title.includes('|') ? title : `${title} | Gabriel Bessa`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonicalUrl} />
      {imageUrl && <meta property='og:image' content={imageUrl} />}

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
      {imageUrl && <meta name='twitter:image' content={imageUrl} />}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};
