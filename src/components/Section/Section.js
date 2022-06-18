import React from 'react';
import PropTypes from 'prop-types';
import './_Section.scss';

function Section(props) {
  return (
    <>
      {props.name === 'promo' ? (
        <section className={`section ${props.name}`} id={`${props.id}`}>
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
        </section>
      ) : (
        <section
          className={`section ${props.theme ? `section_${props.theme}` : ''} ${
            props.name
          }`}
          id={`${props.id}`}>
          <article
            className={`section__info
            ${props.theme ? `section__info_${props.theme}` : ''} ${
              props.name
            }__info`}>
            <h2
              className={`section__subtitle
              ${props.theme ? `section__subtitle_${props.theme}` : ''} ${
                props.name
              }__subtitle`}>
              {props.title}
            </h2>
            {props.children}
          </article>
        </section>
      )}
    </>
  );
}
export default Section;

Section.propTypes = {
  id: PropTypes.string,
  theme: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
