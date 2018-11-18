const getExpensesTotal = (expenses) => {
    return expenses
           .map((expense) => expense.amount)
           .reduce((sum,val) => sum + val, 0);          //sum starts with 0
};
export default getExpensesTotal;
