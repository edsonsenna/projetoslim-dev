import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route 
                path="/"
                exact
                component={Cadastro}
            />

            <Route
                path="/cadastro"
                component={Login}
            />

            

        </Switch>
    </BrowserRouter>

);

export default Routes;
