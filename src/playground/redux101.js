import { createStore } from 'redux';

const store = createStore((state={count: 0},action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state;
    }
});

// const store1 = createStore((initialState) => {
//     this is arrow function as 1st argument of createStore 
// })

console.log(store.getState());


// Actions - it is an object that gets sent to the store
// these help us to update our state on the basis of type we are sending to store via store.dispatch()
 
store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState());