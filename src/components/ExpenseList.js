import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />     //passing expense using spread operator so that data can be accessed using destructuring
        })}
    </div>
);

//connect allows us to access the store passed by provider to the components
// return values can of this can be accessed as props in the components above
//now we will break this function to 2 parts : 1. mapStateToProps function and 2. export default
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)      //We have applied our filters by importing getVisibleItems as selectExpenses and using it 
    }
}

const connectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default connectedExpenseList;

//if we are accessing the value of store then we have to export the connectedComponent