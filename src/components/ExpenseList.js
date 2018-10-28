import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
        {props.filters.text}
    </div>
);

//connect allows us to access the store passed by provider to the components
// return values can of this can be accessed as props in the components above
//now we will break this function to 2 parts : 1. mapStateToProps function and 2. export default
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

const connectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default connectedExpenseList;

//if we are accessing the value of store then we have to export the connectedComponent