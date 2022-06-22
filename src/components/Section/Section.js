import React from 'react';
import PropTypes from 'prop-types';
import './_Section.scss';

function Section(props) {
  return (
    <>
      {props.name === 'promo' ? (
        <section className={`section ${props.name}`} id={`${props.id}`}>
          {props.children}
        </section>
      ) : (
        <section
          className={`section ${props.theme ? 'section_light ' : ''}${props.name}`}
          id={`${props.id}`}>
          {props.children}
        </section>
      )}
    </>
  );
}
export default Section;

Section.propTypes = {
  id: PropTypes.string,
  theme: PropTypes.bool,
  name: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
