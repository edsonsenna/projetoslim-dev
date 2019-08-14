import React, { Component } from 'react';

import Header from '../Commons/Header';

import './styles.css';

export default class Login extends Component {

    render() {
        return (
            <div id="login-page" class="row">
                
                <Header />
                <div class="col s12 z-depth-6 card-panel">
                    
                    <form class="login-form">
                        <div class="row center-align">
                            <h5>Login</h5>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">person</i>
                                <input class="validate" id="username" type="text"/>
                                <label for="username" data-error="wrong" data-success="right">Usuário</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">lock_outline</i>
                                <input id="password" type="password" />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="input-field col s12 center-align">
                                <a href="www.google.com" class="btn waves-effect waves-light col s12">CONFIRMAR</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 center-align">
                                <p class="margin medium-small"><a href="www.google.com">LIMPAR</a></p>
                            </div>
                        </div>
                    
                    </form>
                </div>
            </div> 
            
        )
    }
}
