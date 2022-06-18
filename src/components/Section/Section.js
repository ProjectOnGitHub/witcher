import React from 'react';
import PropTypes from 'prop-types';
import './_Section.scss';

function Section(props) {
  return (
    <section className={`section ${props.name}`} id={`${props.name}`}>
      {props.name === 'promo' ? (
        <>
          <img
            className={`${props.name}__image`}
            src={props.image}
            alt={props.title}
          />
          <article className={`section__info ${props.name}__info`}>
            <h1 className={`section__title ${props.name}__title`}>
              {props.title}
            </h1>
            {props.children}
          </article>
        </>
      ) : (
        <article className={`section__info ${props.name}__info`}>
          <h2 className={`section__title ${props.name}__title`}>
            {props.title}
          </h2>
          {props.children}
        </article>
      )}
    </section>
  );
}
export default Section;

Section.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
