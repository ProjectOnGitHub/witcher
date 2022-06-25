import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';

import './_HeaderMenu.scss';

function HeaderMenu({
  isOpen, games, pages, path,
}) {
  return (
    <ul className={`header__menu ${isOpen ? 'header__menu_opened' : ''}`}>
      {pages.map((page) => (<HeaderMenuItem
        key={page.id}
        url={page.url}
        category={page.category}
        path={path}
        games={games}
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
