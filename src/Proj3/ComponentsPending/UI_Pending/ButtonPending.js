import React from 'react';
import './ButtonPending.css'

const ButtonPending = (props) => {
  return (
    <button className='button_pending' type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ButtonPending;
