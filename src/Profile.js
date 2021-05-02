import React from 'react';
import PropTypes from 'prop-types';
import P from './Paragraph';

const getFilter = (isNotPresent) => {
  if (isNotPresent) {
    return 'grayscale(100%)';
  }

  return 'initial';
};

const Profile = ({ isNotPresent, name, avatar, github }) => {
  return (
    <div
      style={{
        flexDirection: 'column',
        flexWwrap: 'wrap',
        padding: '1.5rem',
      }}
    >
      <a href={github} style={{ textDecoration: 'none' }}>
        <img
          src={avatar}
          alt={name}
          style={{
            filter: getFilter(isNotPresent),
            margin: '0 auto',
            height: '160px',
            width: '160px',
          }}
        />

        <P>{name}</P>
      </a>
    </div>
  );
};

Profile.propTypes = {
  isNotPresent: PropTypes.bool,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

Profile.defaultProps = {
  isNotPresent: false,
};

export default Profile;
