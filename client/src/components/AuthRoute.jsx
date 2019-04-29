import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const ConnectedAuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        this.props.user ? <Component {...props} /> : <Redirect to="/sign_in" />
    )} />
)

const AuthRoute = connect(mapStateToProps)(ConnectedAuthRoute);

export default AuthRoute;