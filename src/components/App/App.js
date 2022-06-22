import { React, useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import allGames from '../../utils/games';

import './_App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [games, setGames] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const data = allGames.map((item) => ({
      id: item.id,
      title: item.title,
      cover: item.cover,
      url: item.url,
      theme: item.lightTheme,
      year: item.year,
      platforms: item.platforms,
    }));
    setGames(data);
  }, []);

  return (
    <div className='app'>
      <Switch>
        <Route exact path={games.map((game) => `${game.url}`)}>
          <Header />
          <Main games={games} location={location} />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
