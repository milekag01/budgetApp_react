import moment from 'moment';
import filtersReducers from '../../reducers/filters';

//checking default state
test('should setup default filter value',() => {
    const state = filtersReducers(undefined,{type: '@@INIT'});      // undefine-->(current state) is used because we are testing default values
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount',() => {
    const state = filtersReducers(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date',() => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};

    const state = filtersReducers(currentState,action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter value',() => {
    const text = 'rent';
    const action = {
        type: 'SET_TEXT_FILTER',
        text: text
    };

    const state = filtersReducers(undefined,action);
    expect(state.text).toBe(text);
});

test('should set start date filter',() =>{
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate: startDate
    };

    const state = filtersReducers(undefined,action);
    expect(state.startDate).toEqual(startDate); 
});

test('should set end date filter',() =>{
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate: endDate
    };

    const state = filtersReducers(undefined,action);
    expect(state.endDate).toEqual(endDate); 
});
