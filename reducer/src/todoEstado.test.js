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
    test("Should return an arrayList with the new object pushed", () => {
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
})
