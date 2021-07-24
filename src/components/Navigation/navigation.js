import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from '../LoginForm/LoginForm';
import Registration from '../RegistrationForm/RegistrationForm';


 
const Navigation = () => {
    return (
       <BrowserRouter>
       <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>

          <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
       </div>
       </BrowserRouter>
    );
}
 
export default Navigation;