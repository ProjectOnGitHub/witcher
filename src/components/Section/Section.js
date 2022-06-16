import React from 'react';
import './_Section.scss';

function Section(props) {
  return (
    <section className={`section ${props.name}`} id={`${props.name}`}>
      <article className={`section__info ${props.name}__info`}>
        <h2 className={`section__title ${props.name}__title`}>{props.title}</h2>
        {props.children}
      </article>
    </section>
  );
} export default Section;

Section.propTypes = {
  name: Section.string,
  title: Section.string,
  children: Section.isRequired,
};
