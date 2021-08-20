import React from 'react'
import { createStore } from 'redux';
import counter from './estado';
import CounterView from './Counter';

const Main = () => {
    
    /**Enlaza la funcion counter al store de redux */
    const store = createStore(counter);

    /**Lanza una acción */
    store.dispatch({ type: 'INCREMENT' })
    
    

    return(
        <div>
            <CounterView 
                value={store.getState()} 
                onIncrement= {()=> {
                    store.dispatch( {type: 'INCREMENT'} )
                }}
                onDecrement= {()=> {
                    store.dispatch( {type: 'DECREMENT'} )
                }}
            />
        </div>
    )
}

export default Main;