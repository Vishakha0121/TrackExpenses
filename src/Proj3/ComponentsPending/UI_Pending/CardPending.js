import React from 'react';
import './CardPending.css';

const CardPending = (props) => {
  return (
    <div className={`card_pending ${props.className}`}>
      {props.children}
    </div>
  );
}

export default CardPending;
