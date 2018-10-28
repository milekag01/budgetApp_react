import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount} from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text}      //this is an example of controlled input where input value is controlled by javascript
            onChange = {(event) => {
                props.dispatch(setTextFilter(event.target.value));
            }}
        />

        <select 
            value={props.filters.sortBy}    //this is an example of controlled input where input value is controlled by javascript
            onChange={(event) => {
                if(event.target.value === 'date') {
                    props.dispatch(sortByDate());
                } else if(event.target.value === 'amount') {
                    props.dispatch(sortByAmount());
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const connectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters);

export default connectedExpenseListFilters;