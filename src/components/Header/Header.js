import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';
import './_Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__link' href='/'>
          <img className='header__logo' alt='logo' src={headerLogo} />
        </a>
        <Navigation name='header'>
          <li className='header__menu-item'>
            <NavLink href='/' className='header__link'>
              Основные игры
            </NavLink>
            <span className='header__menu_drop'></span>
            <ul className='header__submenu header__submenu_active'>
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
            <NavLink href='/online' className='header__link'>
              Онлайн-игры
            </NavLink>
            <span className='header__menu_drop'></span>
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
            <NavLink href='/other' className='header__link'>
              Прочие игры
            </NavLink>
            <span className='header__menu_drop'></span>
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
        </Navigation>
      </div>
    </header>
  );
}

export default Header;
