const toggleTodo = (todo) =>{
    return {
        ...todo,
        completed: !todo.completed
      };
}

const todos = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false
        };
      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
  
        return {
          ...state,
          completed: !state.completed
        };
      default:
        return state;
    }
  };


  /**Add todo agrega una nueva tarea a la lista */
  /**Toggle todo marca como true o terminada una tarea en la lista*/
const todo = ( state = [], action) =>{
    switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            todos(undefined, action)
          ];
        case 'TOGGLE_TODO':
            return state.map(t => todos(t, action));

        default:
          return state;
      }
}

const visibilityFilter = (
    state = 'SHOW_ALL',
    action
  ) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter;
      default:
        return state;
    }
};

const getVisibleTodos = (
    todos,
    filter
    ) => {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter(
                    t => t.completed
                );
            case 'SHOW_ACTIVE':
                return todos.filter(
                    t => !t.completed
                )
            default:
                return todos;
        }
    }

  
module.exports = {toggleTodo, todo, visibilityFilter, getVisibleTodos}