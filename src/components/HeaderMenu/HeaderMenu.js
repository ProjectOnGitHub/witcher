import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';

import './_HeaderMenu.scss';

function HeaderMenu(props) {
  return (
    <ul className={`header__menu ${props.isOpen ? 'header__menu_opened' : ''}`}>
      {props.pages.map((page) => (
        <HeaderMenuItem
          key={page.id}
          url={page.url}
          category={page.category}
          path={props.path}
          games={props.games}
        />
      ))}
    </ul>
  );
}

export default HeaderMenu;

HeaderMenu.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onMobileMenuClick: PropTypes.func,
  pages: PropTypes.array,
  games: PropTypes.array,
  path: PropTypes.func,
};
