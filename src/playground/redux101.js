import { createStore } from 'redux';

// Action generators: functions that returns action object

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({count}) => ({
    type: 'SET',
    count: count
});

//////////////////////////////////////////////////////////
//Reducers
// 1. reducers are pure functions   
// 2. never change state or action instead we mutate the state i.e. change the value but not adding a new property to it
const countReducer = (state={count: 0},action) => {
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
}

//Store
const store = createStore(countReducer);

// const store1 = createStore((initialState) => {
//     this is arrow function as 1st argument of createStore 
// })


//store.subscribe() will watch for changing states and it return a unscribe function which can be used after any action to stop watching
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// Actions - it is an object that gets sent to the store
// these help us to update our state on the basis of type we are sending to store via store.dispatch()

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 3}));
store.dispatch(setCount({count: 101}));
