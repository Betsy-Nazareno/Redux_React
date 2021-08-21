import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import { combineReducers, createStore } from 'redux';
import { visibilityFilter, todo } from './todoEstado';
import reportWebVitals from './reportWebVitals';

const todoApp = combineReducers({todo, visibilityFilter})

const store = createStore(todoApp)


const render = () => {
  ReactDOM.render(
    < TodoApp store={store}/>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
