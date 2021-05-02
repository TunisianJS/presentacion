import React from 'react';
import P from './Paragraph';
import PropTypes from 'prop-types';

const SubmitTalk = ({ to }) => (
  <P>
    Submit your proposal to
    <a href={to.link} style={{ textDecoration: 'none' }}>
      <strong>{to.text}</strong>
    </a> 👌🏻
  </P>
)

//TODO: add prop-types and default-props

export default SubmitTalk
