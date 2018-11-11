import moment from 'moment';
// test data
const expenses = [{
    id: '1',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 19534,
    createdAt: moment(0).subtract(4,'days').valueOf()
}, {
    id: '3',
    description: 'credit card',
    note: '',
    amount: 34567,
    createdAt: moment(0).add(4,'days').valueOf()
}];

export default expenses;