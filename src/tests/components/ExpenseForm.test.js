import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly with defaulf value',() => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with given values',() => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

//simulating user interaction in testing

// 1. form submission
test('should render error for invalid submission',() => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

// 2. simulating description on input change
test('should change description on input change',() => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {    //  in case of multiple input, we use at()
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

// 3. simulating note on text area change
test('should set note on textarea change',() => {
    const value = 'new note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input',() =>{
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});


test('should not set amount if invalid input',() =>{
    const value = '12.152';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
});

// testing calling of onSubmit prop for valid form submission
// here we are using spies
test('should call onSubmit prop for valid form submission',() => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense = { expenses[0] } onSubmit = { onSubmitSpy }/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change',() => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change',() => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});