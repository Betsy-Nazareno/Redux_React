import React, {Component} from 'react';


let nextid=0;

class TodoApp extends Component {

    render(){
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
                    this.props.store.getState().todo.map(todo=>
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )}
                </ul>

                
            </div>
        )
    }
}

export default TodoApp