import { React, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { useLocation } from 'react-router-dom';
import games from '../../utils/games';

import './_App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [cards, setCards] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const data = games.map((item) => ({
      id: item.id,
      title: item.title,
      cover: item.cover,
      url: item.url,
      theme: item.lightTheme,
      year: item.year,
      platforms: item.platforms,
    }));
    setCards(data);
  }, []);

  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main games={cards} location={location} />
          <Footer />
        </Route>
        <Route exact path='/online'>
          <Header />
          <Main games={cards} location={location} />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
