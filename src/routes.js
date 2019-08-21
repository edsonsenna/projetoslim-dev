import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Cadastro from './Components/Cadastro';


const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route
                path="/"
                exact
                component={Login}
            />

            <Route
                path="/cadastro"
                component={Cadastro}
            />

            

        </Switch>
    </BrowserRouter>

);

export default Routes;
