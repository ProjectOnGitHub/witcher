import { React, useEffect, useState } from 'react';
import games from '../../utils/games';

import './_App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const data = games.map((item) => ({
      id: item.id,
      title: item.title,
      cover: item.cover,
      url: item.url,
      theme: item.theme,
      year: item.year,
      platforms: item.platforms,
    }));
    setCards(data);
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main games={cards} />
      <Footer />
    </div>
  );
}

export default App;
