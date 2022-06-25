import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import HeaderSubMenuItem from '../HeaderSubMenuItem/HeaderSubMenuItem';

import './_HeaderMenuItem.scss';

function HeaderMenuItem(props) {
  return (
    <li className='header__menu-item'>
      <NavLink to={props.url} className='header__link'>
        {props.category} <span className='header__menu_drop'></span>
      </NavLink>
      <ul className='header__submenu'>
        {props.games.map((game) => {
          let component;
          if ((props.category === game.category)) {
            component = <HeaderSubMenuItem
              key={game.id}
              id={game.id}
              url={game.url}
              category={game.category}
              heading={game.heading}
              path={props.path}
            />;
          }
          return component;
        })}
      </ul>
    </li>
  );
}

export default HeaderMenuItem;

HeaderMenuItem.propTypes = {
  url: PropTypes.string,
  category: PropTypes.string,
  pages: PropTypes.array,
  games: PropTypes.array,
  path: PropTypes.func,
};
