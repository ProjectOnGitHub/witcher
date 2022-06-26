import { React, useState } from 'react';
import PropTypes from 'prop-types';
import headerLogo from '../../images/logo.png';
import HeaderNav from '../HeaderNav/HeaderNav';
import './_Header.scss';

function Header({ games, pages, path }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }
  function handleMobileMenuClick() {
    setIsMobileMenuOpen(true);
  }
  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__link' href='/'>
          <img className='header__logo' alt='logo' src={headerLogo} />
        </a>
        <HeaderNav
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
          onMobileMenuClick={handleMobileMenuClick}
          games={games}
          pages={pages}
          path={path}
        />
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  pages: PropTypes.array,
  games: PropTypes.array,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  path: PropTypes.string,
};
