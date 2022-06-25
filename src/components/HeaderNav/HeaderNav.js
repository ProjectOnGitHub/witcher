import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import './_HeaderNav.scss';

function HeaderNav(props) {
  return (
    <>
      <Navigation name='header'>
        <div
          className={`header__navigation-overlay ${
            props.isOpen ? 'header__navigation-overlay_active' : ''
          }`}
          onClick={
            props.isOpen ? props.onClose : props.onMobileMenuClick
          }></div>
        <HeaderMenu
          isOpen={props.isOpen}
          games={props.games}
          pages={props.pages}
          path={props.path}
        />
      </Navigation>
      <Button
        mix={'header__menu-button'}
        type='button'
        name='mobile-menu'
        aria-label='mobile menu'
        isOpen={props.isOpen}
        onClose={props.onClose}
        onMobileMenuClick={props.onMobileMenuClick}
      />
    </>
  );
}

export default HeaderNav;

HeaderNav.propTypes = {
  pages: PropTypes.array,
  games: PropTypes.array,
  path: PropTypes.func,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onMobileMenuClick: PropTypes.func,
};
