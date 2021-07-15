import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import page componets
import Header from './componets/Header';
import Login from './componets/LoginForm';
import Registration from './componets/RegistrationForm';

// all routes go here
export default (
    <Route path="/" componet={Header}>
        <Route path="/login" componet={Login}/>
        <Route path="/registrarion" componet={Registration}/>
    </Route>
);