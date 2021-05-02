import React from 'react';
import PropTypes from 'prop-types';
import P from './Paragraph';

const getFilter = isNotPresent => {
  if (isNotPresent) {
    return 'grayscale(100%)';
  }

  return 'initial';
};

const Profile = ({ isNotPresent, name, avatar, github }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem',
        width: '25%'
      }}
    >
      {/*TODO: add flex */}
      <a href={github} style={{ textDecoration: 'none' }}>
        <img
          src={avatar}
          alt={name}
          style={{
            filter: getFilter(isNotPresent),
            margin: '0 auto',
            height: '300px',
            width: '300px'
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
  github: PropTypes.string.isRequired
};

Profile.defaultProps = {
  isNotPresent: false
};

export default Profile;
