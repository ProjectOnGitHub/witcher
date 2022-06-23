import React from 'react';
import PropTypes from 'prop-types';
import './_Section.scss';

function Section(props) {
  return (
    <section
      className={`section ${props.theme ? 'section_light ' : ''}${props.name}`}
      id={`${props.id}`}>
      {props.children}
    </section>
  );
}
export default Section;

Section.propTypes = {
  id: PropTypes.string,
  theme: PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.node,
};
