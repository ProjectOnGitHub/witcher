import React from 'react';
import PropTypes from 'prop-types';
import './_Paragraph.scss';

function Paragraph(props) {
  return (
    <p className={`${props.name}__paragraph`}>
      {props.text}
    </p >
  );
}
export default Paragraph;

Paragraph.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
};
