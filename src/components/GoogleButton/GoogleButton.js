import React from 'react';
import PropTypes from 'prop-types';
import './GoogleButton.css';

function GoogleButton(props) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

GoogleButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

GoogleButton.defaultProps = {
  onClick: null,
};

export default GoogleButton;
