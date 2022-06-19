import React from 'react';
import PropTypes from 'prop-types';
import Promo from '../Promo/Promo';
import Game from '../Game/Game';

import './_Main.scss';

function Main({ games }) {
  return (
    <main className='main'>
      <Promo />
      {games.map((game) => (
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
      ))}
    </main>
  );
}

export default Main;

Main.propTypes = {
  games: PropTypes.array,
};
