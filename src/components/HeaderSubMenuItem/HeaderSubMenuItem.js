import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './_HeaderSubMenuItem.scss';

function HeaderSubMenuItem(props) {
  return (
    <li className='header__submenu-item'>
      <Link to={`${props.url}#${props.id}`} className='header__link'>
        {props.heading}
      </Link>
    </li>
  );
}

export default HeaderSubMenuItem;

HeaderSubMenuItem.propTypes = {
  url: PropTypes.string,
  heading: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
  pages: PropTypes.array,
  games: PropTypes.array,
  path: PropTypes.string,
};
