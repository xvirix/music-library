import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import page componets
import Header from './componets/Header';
import Login from './componets/LoginForm';
import Registration from './componets/RegistrationForm';
import Player from './componet/Player'

// all routes go here
export default (
    <Route path="/" componet={ Header }>
        <Route path="/login" componet={ Login }/>
        <Route path="/registrarion" componet={ Registration }/>
        <Route path="/player" componet={ Player }/>
    </Route>
);