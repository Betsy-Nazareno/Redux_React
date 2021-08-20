const counter = require('./estado.js');
describe('Counter', ()=>{
    test("Should return 1 when the action is Increment and the state is 0", ()=>{
        expect(
            counter(0, {type: 'INCREMENT'})
        ).toEqual(1);
    })
    test("Should return 2 when the action is Increment and the state is 1", ()=>{
        
        expect(
            counter(1, {type: 'INCREMENT'})
        ).toEqual(2);
    })
    
    test("Should return 1 when the action is Decrement and the state is 2", ()=>{
        expect(
            counter(2, {type: 'DECREMENT'})
        ).toEqual(1);
        
    })

    test("Should return 1 when the action is Something_else and the state is 1", ()=>{
        expect(
            counter(1, {type: 'SOMETHING_ELSE'})
        ).toEqual(1);
    })
      
  
})

