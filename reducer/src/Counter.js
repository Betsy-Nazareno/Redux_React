import React from 'react';

const CounterView = ({value, onIncrement, onDecrement}) => {
    return(
        <div>
            <h1>state: {value}</h1>
            <button onClick={onIncrement}> +</button>
            <button onClick={onDecrement}> - </button>
        </div>
    )
}

export default CounterView;
