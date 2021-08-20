const Module = require('./todoEstado.js');
const deepFreeze = require('deep-freeze');

describe('ToggleTodo', () => {
    test("Should return an object with the 'completed' key true when we sent an object with 'completed' key=false", () => {

        const todoBefore = {
            id: 0,
            text: 'Learn Redux',
            completed: false
        };
        const todoAfter = {
            id: 0,
            text: 'Learn Redux',
            completed: true
        };

        deepFreeze(todoBefore);

        expect(
            Module.toggleTodo(todoBefore)
        ).toEqual(todoAfter);

    })
});

describe("todo", () => {
    test("Should return an arrayList with a new task specified in the action object", () => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(
            Module.todo(stateBefore, action)
        ).toEqual(stateAfter);
    })

    test("Should change to true the completed key in the object specified", ()=>{
        const stateBefore = [
            {
              id: 0,
              text: 'Learn Redux',
              completed: false
            },
            {
              id: 1,
              text: 'Go shopping',
              completed: false
            }
          ];
          const action = {
            type: 'TOGGLE_TODO',
            id: 1
          };
          const stateAfter = [
            {
              id: 0,
              text: 'Learn Redux',
              completed: false
            },
            {
              id: 1,
              text: 'Go shopping',
              completed: true
            }
          ];
          
          deepFreeze(stateBefore);
          deepFreeze(action);
          
          expect(
            Module.todo(stateBefore, action)
          ).toEqual(stateAfter);
    })
})
