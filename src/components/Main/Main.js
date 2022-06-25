import React from 'react';
import PropTypes from 'prop-types';
import Promo from '../Promo/Promo';
import Game from '../Game/Game';

import './_Main.scss';

function Main({ games, path, pages }) {
  return (
    <main className='main'>
      {pages.map((page) => {
        let component;
        if (path === `${page.url}`) {
          component = (
            <Promo
              key={page.id}
              id={page.id}
              url={page.url}
              heading={page.heading}
              cover={page.cover}
              text={page.text}
              name='promo'
            />
          );
        }
        return component;
      })}
      {games.map((game) => {
        let component;
        if (path === `${game.url}`) {
          component = (
            <Game
              key={game.id}
              id={game.id}
              url={game.url}
              heading={game.heading}
              cover={game.cover}
              theme={game.theme}
              text={game.text}
              year={game.year}
              platforms={game.platforms}
              name='game'
            />
          );
        }
        return component;
      })}
    </main>
  );
}

export default Main;

Main.propTypes = {
  games: PropTypes.array,
  pages: PropTypes.array,
  path: PropTypes.object,
};
