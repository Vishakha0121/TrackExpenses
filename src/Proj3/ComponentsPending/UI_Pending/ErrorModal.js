import React from 'react';
import CardPending from './CardPending';
import ButtonPending from './ButtonPending';
import './ErrorModal.css'
const ErrorModal = (props) => {
    return (
        <div>
            <div className='backdrop' onClick={props.onConfirm} />
            <CardPending className='modal-box'>
                <header className='header'>
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className='content'>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className='actions'>
                    <ButtonPending onClick={props.onConfirm}>Okay</ButtonPending>
                </footer>
            </CardPending>
        </div>

    );
}

export default ErrorModal;
