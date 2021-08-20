import React from 'react'
import { combineReducers, createStore } from 'redux';
import { visibilityFilter, todo } from './todoEstado';

const Main = () => {

    /**Combina reducers: Si te das cuenta 'todo' tiene un switch case de acuerdo a las acciones 
     * que tomará efecto, así mismo VisibilityFilter, solo que ahora combinamos estos dos y como resyltado tenemos
     * un solo objeto
     */
    const todoApp = combineReducers({todo, visibilityFilter})

    const store = createStore(todoApp)

   


    console.log('Initial state:');
    console.log(store.getState());
    console.log('--------------');

    console.log('Dispatching ADD_TODO.')
    store.dispatch({
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    });
    console.log('Current state:');
    console.log(store.getState());
    console.log('--------------');

    console.log('Dispatching ADD_TODO.');
    store.dispatch({
        type: 'ADD_TODO',
        id: 1,
        text: 'Go shopping'
    });
    console.log('Current state:');
    console.log(store.getState());
    console.log('--------------');

    console.log('Dispatching TOGGLE_TODO.');
    store.dispatch({
        type: 'TOGGLE_TODO',
        id: 0
    });
    console.log('Current state:');
    console.log(store.getState());
    console.log('--------------');

    console.log('Dispatching SET_VISIBILITY_FILTER');
    store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
    });
    console.log('Current state:');
    console.log(store.getState());
    console.log('--------------');



    return (
        <div>
            Hello world
        </div>
    )
}

export default Main;