import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import './_Promo.scss';

function Promo(props) {
  return (
    <Section name={props.name} id={props.id}>
      <img
        className="promo__image"
        src={props.cover}
        alt={props.title}
      />
      <article className={`${props.name}__info`}>
        <h1 className={`${props.name}__title`}>
          {props.title}
        </h1>
        {props.text}
      </article>
    </Section>
  );
}
export default Promo;

Promo.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  cover: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,

};
