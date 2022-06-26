import React from 'react';
import PropTypes from 'prop-types';
import './_HeaderSubMenuItem.scss';

function HeaderSubMenuItem(props) {
  return (
    <li className='header__submenu-item'>
      <a href={`${props.url}#${props.id}`} className='header__link'>
        {props.heading}
      </a>
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
