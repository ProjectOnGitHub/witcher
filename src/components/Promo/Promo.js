import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import promoImage from '../../images/background.jpg';
import './_Promo.scss';

function Promo() {
  return (
    <Section name='promo' title='О Ведьмаке' image={promoImage}>
      <p className='section__text promo__text'>
        Серия компьютерных игр разработана польской компанией CD Projekt RED по
        мотивам одноимённой серии романов польского писателя Анджея Сапковского.
        Релиз первой игры на платформе Windows состоялся 24 октября 2007 года —
        в России, 26 октября — в Европе и 30 октября 2007 года — в США. В 2012
        году вышла версия для OS X.
      </p>
    </Section>
  );
}
export default Promo;

Promo.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
