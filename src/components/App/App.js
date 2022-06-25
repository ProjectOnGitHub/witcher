import { React, useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { allGames, allPages } from '../../utils/games';

import './_App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [games, setGames] = useState([]);
  const [pages, setPages] = useState([]);
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const data = allGames.map((item) => ({
      id: item.id,
      heading: item.heading,
      cover: item.cover,
      url: item.url,
      theme: item.lightTheme,
      year: item.year,
      platforms: item.platforms,
      text: item.text,
    }));
    setGames(data);
  }, []);

  useEffect(() => {
    const data = allPages.map((item) => ({
      id: item.id,
      url: item.url,
      cover: item.cover,
      title: item.title,
      category: item.category,
      heading: item.heading,
      text: item.text,
    }));
    setPages(data);
  }, []);

  return (
    <div className='app'>
      <Switch>
        <Route exact path={games.map((game) => `${game.url}`)}>
          <Helmet title={pages.map((page) => (page.url === path ? `${page.title}` : ''))} />
          <Header />
          <Main games={games} pages={pages} path={path} />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
