const counter = (state = 0, action) => {
    switch( action.type ) {

        case 'INCREMENT':
            return state+1;

        case 'DECREMENT':
            return state -1;

        default:
            return state; 

    }

    
}

const addCounter = (lista) =>{
    return [...lista, 0];

}

const removeCounter = (index, lista) =>{
    return [
        ...lista.slice(0, index),
        ...lista.slice(index+1)
    ]
}

const incrementCounter = (index, lista) => {
    return [
        ...lista.slice(0, index),
        lista[index] + 1,
        ...lista.slice(index+1)
    ]
}
module.exports = {counter, addCounter, removeCounter, incrementCounter}