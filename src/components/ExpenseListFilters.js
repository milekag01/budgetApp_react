import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };

    onDatesChange = ({startDate,endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calenderFocused) => {
        this.setState (() => ({calenderFocused: calenderFocused}));
    };

    onTextChange = (event) => {
        this.props.setTextFilter(event.target.value);
    };

    onSortChange = (event) => {
        if(event.target.value === 'date') {
            this.props.sortByDate();
        } else if(event.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text}      //this is an example of controlled input where input value is controlled by javascript
                    onChange = {this.onTextChange}
                />

                <select 
                    value={this.props.filters.sortBy}    //this is an example of controlled input where input value is controlled by javascript
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                
                <DateRangePicker 
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calenderFocused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

const connectedExpenseListFilters = connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);

export default connectedExpenseListFilters;