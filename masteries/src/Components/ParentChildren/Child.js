import React from 'react';
import './parentChild.css';

export default function Child(props) {
    const sayMessage = (event) => {
        alert(props.message);
    }

    return (
        <div className='child'>
            <h1>{props.message}</h1>
            <button onClick={sayMessage}>Alert</button>
            <button onClick={() => {props.removeMessage()}}>Clear</button>
        </div>
    )
}