import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

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
        <ul className={`header__menu ${isOpen ? 'header__menu_opened' : ''}`}>
          <li className='header__menu-item'>
            <a href='/' className='header__link'>
              Основные игры <span className='header__menu_drop'></span>
            </a>
            <ul className='header__submenu'>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  Ведьмак
                </a>
              </li>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  Ведьмак 2: Убийцы королей
                </a>
              </li>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  Ведьмак 3: Дикая охота
                </a>
              </li>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  Ведьмак 3: Каменные сердца
                </a>
              </li>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  Ведьмак 3: Кровь и вино
                </a>
              </li>
            </ul>
          </li>
          <li className='header__menu-item'>
            <a href='/online' className='header__link'>
              Онлайн-игры <span className='header__menu_drop'></span>
            </a>

            <ul className='header__submenu'>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  Гвинт: Ведьмак. Карточная игра
                </a>
              </li>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  Кровная вражда: Ведьмак. Истории
                </a>
              </li>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  Ведьмак: Охотник на чудовищ
                </a>
              </li>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  Ведьмак: Приключенческая Игра
                </a>
              </li>
            </ul>
          </li>
          <li className='header__menu-item'>
            <a href='/other' className='header__link'>
              Прочие игры <span className='header__menu_drop'></span>
            </a>

            <ul className='header__submenu'>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  The Witcher: Rise of the White Wolf
                </a>
              </li>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  The Witcher: Versus
                </a>
              </li>
              <li className='header__submenu-item'>
                <a href='#' className='header__link'>
                  The Witcher: Battle Arena
                </a>
              </li>
            </ul>
          </li>
        </ul>
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
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  onMobileMenuClick: PropTypes.func,
};
