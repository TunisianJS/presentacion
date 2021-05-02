import React from 'react';

const Logo = ({ src, alt }) => <img src={src} alt={alt} style={{ height: '120px' }} />;

Logo.defaultProps = {
  src: './images/logo.svg',
  alt: 'Meetup.js Buenos Aires',
};

export default Logo;
