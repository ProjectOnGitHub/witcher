import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import './_HeaderNav.scss';

function HeaderNav({ isOpen, onClose, onMobileMenuClick }) {
  return (
    <>
      <Navigation name='header'>
        <div
          className={`header__navigation-overlay ${
            isOpen ? 'header__navigation-overlay_active' : ''
          }`}
          onClick={isOpen ? onClose : onMobileMenuClick}></div>
        <HeaderMenu isOpen={isOpen} />
      </Navigation>
      <Button
        mix={'header__menu-button'}
        type='button'
        name='mobile-menu'
        aria-label='mobile menu'
        isOpen={isOpen}
        onClose={onClose}
        onMobileMenuClick={onMobileMenuClick}
      />
    </>
  );
}

export default HeaderNav;

HeaderNav.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onMobileMenuClick: PropTypes.func,
};
