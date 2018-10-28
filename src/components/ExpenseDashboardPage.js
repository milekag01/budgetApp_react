import React from 'react';
import ExpenseList from './ExpenseList';  // we are importing connectedExpenseList as ExpenseList
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage= () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;