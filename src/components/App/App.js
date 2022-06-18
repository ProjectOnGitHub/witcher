import React from 'react';

import './_App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';

function App() {
  return (
    <div className='app'>
      <Header />
      <Main>
        <Promo name='promo' />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
