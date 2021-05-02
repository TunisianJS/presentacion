import React from 'react';
import PropTypes from 'prop-types';

import P from './Paragraph';

export const Kahoot = ({ value }) => (
  value
    ? (
      <P>
        <strong>Kahoot! </strong>
        <span>with prizes</span>
        <span style={{ marginLeft: '.5rem' }}>📱</span>
      </P>
    )
    : ''
)

Kahoot.propTypes = {
  value: PropTypes.bool.isRequired
};


export const Stickers = ({ value }) => (
  value
    ? (
      <P>
        <strong>Stickers</strong>
        <span style={{ marginLeft: '.5rem' }}>✨</span>
      </P>
    )
    : ''
)

Stickers.propTypes = {
  value: PropTypes.bool.isRequired
};