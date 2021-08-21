import React from 'react';

const FilterLink = (props) =>{
    let filter = props.filter

    if ( filter === props.currentFilter ){
        return <span> {props.children} </span>
    }
    else {
        return(
            <button
                onClick={()=> {
                    props.store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter
                    });
                }}>
                {props.children}
            </button>
        )
    }
}

export default FilterLink;