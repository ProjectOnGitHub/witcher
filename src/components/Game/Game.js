import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import Paragraph from '../Paragraph/Paragraph';
import './_Game.scss';

function Game(props) {
  return (
    <Section name={props.name} id={props.id} heading={props.heading} theme={props.theme}>
      <article
        className={`${props.name}__info`}>
        <img
          className={`${props.name}__info-image`}
          src={props.cover}
          alt={props.heading}
        />
        <h2
          className={`${props.name}__heading`}>
          {props.heading}
        </h2>
        <div
          className={`${props.name}__text`}>
          {props.text.map((item) => (<Paragraph name='game' key={item.length} text={item} />))}
        </div>
        <div className='game__platform'>
          <h4 className='game__platform-heading'>Доступно на:</h4>
          <ul className='game__platform-list'>
            <li className='game__platform-item'>PC,</li>
            <li className='game__platform-item'>Playstation 4</li>
          </ul>
        </div>
      </article>
    </Section >
  );
}
export default Game;

Game.propTypes = {
  url: PropTypes.string,
  text: PropTypes.array,
  pathname: PropTypes.string,
  location: PropTypes.object,
  name: PropTypes.string,
  cover: PropTypes.string,
  id: PropTypes.string,
  heading: PropTypes.string,
  theme: PropTypes.bool,
};
