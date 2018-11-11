import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',() => {
    const state = expensesReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'water bill',
        note: '',
        amount: 22340,
        createdAt: moment(0).add(5,'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

// method-1
// test('should edit an expense if expense found',() => {
//     const updates = {
//         note: 'rent of last month'
//     };
//     const action = {
//         type: 'EDIT_EXPENSE',
//         id: '2',
//         updates: updates
//     };
//     const state = expensesReducer(expenses,action);
//     expect(state).toEqual([expenses[0],{...expenses[1], ...updates},expenses[2]]);
// });

//method-2
test('should edit an expense if expense found',() => {
    const note = 'rent of last month';
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note: note
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[1].note).toBe(note);
});

// method-1
// test('should not edit an expense if expense not found',() => {
//     const updates = {
//         note: 'rent of last month'
//     };
//     const action = {
//         type: 'EDIT_EXPENSE',
//         id: '-1',
//         updates: updates
//     };
//     const state = expensesReducer(expenses,action);
//     expect(state).toEqual(expenses);
// });

// method-2
test('should not edit an expense if expense not found',() => {
    const note = 'rent of last month';
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: note
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});
