import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import './_Game.scss';

function Game(props) {
  return (
    <Section name='game' id={props.id} title={props.title} theme={props.theme}>
      <article
        className='game__info'>
        <img
          className='game__info-image'
          src={props.cover}
          alt={props.title}
        />
        <h2
          className='game__title'>
          {props.title}
        </h2>
        <div
          className='game__text'>
          <p
            className='game__paragraph'>
            Серия компьютерных игр разработана польской компанией CD Projekt RED
            по мотивам одноимённой серии романов польского писателя Анджея
            Сапковского. Релиз первой игры на платформе Windows состоялся 24
            октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007
            года — в США. В 2012 году вышла версия для OS X.
          </p>
          <p
            className='game__paragraph'>
            Серия компьютерных игр разработана польской компанией CD Projekt RED
            по мотивам одноимённой серии романов польского писателя Анджея
            Сапковского. Релиз первой игры на платформе Windows состоялся 24
            октября 2007 года — в России, 26 октября — в Европе и 30 октября 2007
            года — в США. В 2012 году вышла версия для OS X.
          </p>
        </div>
        <div className='game__platform'>
          <h4 className='game__platform-title'>Доступно на:</h4>
          <ul className='game__platform-list'>
            <li className='game__platform-item'>PC,</li>
            <li className='game__platform-item'>Playstation 4</li>
          </ul>
        </div>
      </article>
    </Section>
  );
}
export default Game;

Game.propTypes = {
  url: PropTypes.string,
  pathname: PropTypes.string,
  location: PropTypes.object,
  name: PropTypes.string,
  cover: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.bool,
};
