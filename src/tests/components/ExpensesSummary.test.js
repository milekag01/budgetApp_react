import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpenseList summary with 1 expense',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {195} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList summary with multiple expense',() => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {3} expensesTotal = {54296}/>);
    expect(wrapper).toMatchSnapshot();
});
