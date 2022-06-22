import React from 'react';
import PropTypes from 'prop-types';
import Promo from '../Promo/Promo';
import Game from '../Game/Game';

import './_Main.scss';

function Main({ games, location }) {
  const path = location.pathname;
  return (
    <main className='main'>
      {path === '/' && <Promo title="О ведьмаке">
        <p className='section__text promo__text'>
          Серия компьютерных игр разработана польской компанией CD Projekt RED по
          мотивам одноимённой серии романов польского писателя Анджея Сапковского.
          Релиз первой игры на платформе Windows состоялся 24 октября 2007 года —
          в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012
          году вышла версия для OS X.
        </p></Promo>}
      {games.map((game) => {
        let component;
        if (path === `${game.url}`) {
          component = (
            <Game
              key={game.id}
              id={game.id}
              url={game.url}
              title={game.title}
              cover={game.cover}
              theme={game.theme}
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
  location: PropTypes.object,
};
