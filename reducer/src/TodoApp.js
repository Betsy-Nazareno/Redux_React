import React, {Component} from 'react';
import FilterLink from './FilterLink';
import {getVisibleTodos} from './todoEstado';


let nextid=0;

class TodoApp extends Component {

    render(){
        const visibleTodos = getVisibleTodos(
            this.props.store.getState().todo,
            this.props.store.getState().visibilityFilter
        )
        
        return(
            <div>
                <input ref={node=>{
                    this.input = node;
                }}/>
                <button onClick={()=>{
                    this.props.store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextid++ 
                    })
                    this.input.value="";
                }}>
                    Add Todo
                </button>

                <ul>
                    {
                    visibleTodos.map(todo=>
                        <li key={todo.id}
                            onClick={()=>{
                            this.props.store.dispatch({
                                type: 'TOGGLE_TODO',
                                id: todo.id
                                })
                            }}
                            style={{
                                textDecoration:
                                todo.completed? 
                                'line-through' :
                                'none'
                            }}

                        >
                            {todo.text}
                        </li>
                    )}
                </ul>

                <p>
                    Show: 
                    {' '}
                    <FilterLink
                        filter='SHOW_ALL'
                        store={this.props.store}
                        currentFilter = {this.props.store.getState().visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {' '}

                    <FilterLink
                        filter='SHOW_ACTIVE'
                        store={this.props.store}
                        currentFilter = {this.props.store.getState().visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {' '}

                    <FilterLink
                        filter='SHOW_COMPLETED'
                        store={this.props.store}
                        currentFilter = {this.props.store.getState().visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                    {' '}
                </p>

                
            </div>
        )
    }
}

export default TodoApp