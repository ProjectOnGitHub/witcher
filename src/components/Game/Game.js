import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import './_Game.scss';

function Game(props) {
  return (
    <Section key={props.key} name='game' id={props.id} title={props.title} theme={props.theme}>
      <p className={`section__text ${props.theme ? `section__text_${props.theme}` : ''} ${props.name}__text`}>
        Серия компьютерных игр разработана польской компанией CD Projekt RED по
        мотивам одноимённой серии романов польского писателя Анджея Сапковского.
        Релиз первой игры на платформе Windows состоялся 24 октября 2007 года —
        в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012
        году вышла версия для OS X.
      </p>
    </Section>
  );
}
export default Game;

Game.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.string,
};
