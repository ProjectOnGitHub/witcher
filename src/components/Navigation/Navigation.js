import React from 'react';
import PropTypes from 'prop-types';
import './_Navigation.scss';

function Navigation(props) {
  return <nav className={`${props.name}__navigation`}>{props.children}</nav>;
}

export default Navigation;

Navigation.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
};
