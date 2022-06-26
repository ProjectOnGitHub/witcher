import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import Paragraph from '../Paragraph/Paragraph';
import './_Promo.scss';

function Promo(props) {
  return (
    <Section name={props.name} id={props.id}>
      <img className='promo__image' src={props.cover} alt={props.heading} />
      <article className={`${props.name}__info`}>
        <h1 className={`${props.name}__heading`}>{props.heading}</h1>
        <div className={`${props.name}__text`}>
          {props.text.map((item) => (
            <Paragraph name='promo' key={item.length} text={item} />
          ))}
        </div>
      </article>
    </Section>
  );
}
export default Promo;

Promo.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  cover: PropTypes.string,
  text: PropTypes.array,
  heading: PropTypes.string,
};
