//higher order components
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>this info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this info is private. please don't share </p>}
            <WrappedComponent {...props} />
        </div>
    );
};

//requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p> please login to access the component </p>
                )
            }
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin = {false} info = "these are the details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {false} info = "these are the details" />,document.getElementById('app'));