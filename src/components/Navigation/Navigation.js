import React from 'react';
import './_Navigation.scss';

function Navigation(props) {
  return (
    <nav className={`${props.name}__navigation`}>
      <ul className={`${props.name}__menu`}>
        {props.children}
      </ul>
    </nav>
  );
}


export default Navigation;