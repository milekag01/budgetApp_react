import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };

    onDatesChange = ({startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calenderFocused) => {
        this.setState (() => ({calenderFocused: calenderFocused}));
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text}      //this is an example of controlled input where input value is controlled by javascript
                    onChange = {(event) => {
                        this.props.dispatch(setTextFilter(event.target.value));
                    }}
                />

                <select 
                    value={this.props.filters.sortBy}    //this is an example of controlled input where input value is controlled by javascript
                    onChange={(event) => {
                        if(event.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } else if(event.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
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

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const connectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters);

export default connectedExpenseListFilters;