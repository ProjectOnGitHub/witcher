import { React, useState } from 'react';
import headerLogo from '../../images/logo.png';
import HeaderNav from '../HeaderNav/HeaderNav';
import './_Header.scss';

function Header() {
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
        />
      </div>
    </header>
  );
}

export default Header;
