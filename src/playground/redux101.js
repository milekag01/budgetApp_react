import { createStore } from 'redux';

const store = createStore((state={count: 0},action) => {
    switch(action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'SET': 
            return {
                count: action.count
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


//store.subscribe() will watch for changing states and it return a unscribe function which can be used after any action to stop watching
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})



// Actions - it is an object that gets sent to the store
// these help us to update our state on the basis of type we are sending to store via store.dispatch()

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
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
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 3
});
store.dispatch({
    type: 'SET',
    count: 101
})
