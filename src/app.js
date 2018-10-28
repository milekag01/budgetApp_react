import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(VisibleExpenses);
})

store.dispatch(addExpense({ description: 'water bill', amount: 100, createdAt: -250 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 300, createdAt: 123 }));

store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));



const appRoot = document.getElementById('app');
ReactDOM.render(<AppRouter />,appRoot);
