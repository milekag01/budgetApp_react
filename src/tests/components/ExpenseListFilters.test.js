import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly',() => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly',() => {
    wrapper.setProps({              // setProps() is given by enzyme to change the prop values and can be used in the tests only 
        filters: filters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',() => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: {
            value: value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date',() => {
    const value = 'date'; 
    wrapper.setProps({              // to set sortBy to amount
        filters: filters
    });
    wrapper.find('select').simulate('change', {
        target: {
            value: value
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});


test('should sort by amount',() => {
    const value = 'amount'; 
    wrapper.find('select').simulate('change', {
        target: {
            value: value
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes',() => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes',() => {
    const calenderFocused = 'endDate';  //means endDate is focused(see the documentation)
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
});