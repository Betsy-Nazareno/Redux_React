const Module = require('./estado.js');
const deepFreeze = require('deep-freeze');

describe('Counter', ()=>{
    test("Should return 1 when the action is Increment and the state is 0", ()=>{
        expect(
            Module.counter(0, {type: 'INCREMENT'})
        ).toEqual(1);
    })
    test("Should return 2 when the action is Increment and the state is 1", ()=>{
        
        expect(
            Module.counter(1, {type: 'INCREMENT'})
        ).toEqual(2);
    })
    
    test("Should return 1 when the action is Decrement and the state is 2", ()=>{
        expect(
            Module.counter(2, {type: 'DECREMENT'})
        ).toEqual(1);
        
    })

    test("Should return 1 when the action is Something_else and the state is 1", ()=>{
        expect(
            Module.counter(1, {type: 'SOMETHING_ELSE'})
        ).toEqual(1);
    })
      
  
})

describe('AddCounter', ()=>{
    test('Should be a Function', ()=>{
        expect( Module.addCounter ).toBeInstanceOf(Function)
    })
    test('Should return a list of one element when we sent a empty list like parameter', ()=>{
        listBefore = []
        listAfter = [0]
        
        deepFreeze(listBefore)
        expect(Module.addCounter( listBefore )).toEqual( listAfter )
    })

})

describe('RemoveCounter', ()=>{
    test('Should be a Function', ()=>{
        expect( Module.removeCounter ).toBeInstanceOf(Function)
    })
    test('Should return a list of two elements when we sent a list of three elements as parameter', ()=>{
        listBefore = [0, 10, 20]
        listAfter = [0, 20]
        
        deepFreeze(listBefore)
        expect(Module.removeCounter(1, listBefore )).toEqual( listAfter )
    })

})

describe('IncrementOneCounter', ()=>{
    test('Should be a Function', ()=>{
        expect( Module.incrementCounter ).toBeInstanceOf(Function)
    })
    test('Should return the same list with the element incremented in the position gave', ()=>{
        listBefore = [0, 10, 20]
        listAfter = [0, 11, 20]
        
        deepFreeze(listBefore)
        expect(Module.incrementCounter(1, listBefore )).toEqual( listAfter )
    })

})

