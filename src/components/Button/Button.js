import React from 'react';
import PropTypes from 'prop-types';
import './_Button.scss';

function Button(props) {
  return (
    <button
      className={`button ${props.mix} ${
        props.isOpen ? 'header__menu-button_opened' : ''
      }`}
      type={props.type}
      name={props.name}
      aria-label={props.aria}
      onClick={props.isOpen ? props.onClose : props.onMobileMenuClick}>
      {props.text}
    </button>
  );
}

export default Button;
Button.propTypes = {
  mix: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  aria: PropTypes.string,
  text: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  onMobileMenuClick: PropTypes.func,
};
