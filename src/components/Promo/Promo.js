import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import promoImage from '../../images/background.jpg';
import './_Promo.scss';

function Promo(props) {
  return (
    <Section name='promo' id='promo' image={promoImage}>
      <img
        className="promo__image"
        src={promoImage}
        alt={props.title}
      />
      <article className="promo__info">
        <h1 className="promo__title">
          {props.title}
        </h1>
        {props.children}
      </article>
    </Section>
  );
}
export default Promo;

Promo.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
