import React from 'react';
import PropTypes from 'prop-types';
import './_Button.scss';

function Button(props) {
  return (
    <>
      {props.isOpen ? (
        <button
          className={`button ${props.mix} header__menu-button_opened`}
          type={props.type}
          name={props.name}
          aria-label={props.aria}
          onClick={props.onClose}>
          {props.text}
        </button>
      ) : (
        <button
          className={`button ${props.mix} `}
          type={props.type}
          name={props.name}
          aria-label={props.aria}
          onClick={props.onMobileMenuClick}>
          {props.text}
        </button>
      )}
    </>
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
