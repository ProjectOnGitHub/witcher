import React from 'react';
import headerLogo from '../../images/logo.png';
import HeaderNav from '../HeaderNav/HeaderNav';
import './_Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__link' href='/'>
          <img className='header__logo' alt='logo'
            src={headerLogo} />
        </a>
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
