import React from 'react';
import PropTypes from 'prop-types';
import './_Main.scss';

function Main(props) {
  return <main className='main'>{props.children}</main>;
}

export default Main;

Main.propTypes = {
  children: PropTypes.node,
};
