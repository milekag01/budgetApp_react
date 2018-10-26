import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage= () => (
    <div>Expense manager dashboard</div>
);
const AddExpensePage= () => (
    <div>Add Expense Page</div>
);
const EditExpensePage= () => (
    <div>Edit Expense Page</div>
);
const HelpPage= () => (
    <div>Help page</div>
);
const NotFoundPage= () => (
    <div>
        404 page
        <Link to="/">Go Home</Link>
    </div>
);
const Header= () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add new Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Get Help</NavLink>
    </div>
);

const routes=(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);

const appRoot = document.getElementById('app');

ReactDOM.render(routes,appRoot);
