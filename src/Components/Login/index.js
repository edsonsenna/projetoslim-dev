import React, { Component } from 'react';

import Header from '../Commons/Header';

import './styles.css';

export default class Login extends Component {

    state = {
        login: "",
        password: ""
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.history.push("/cadastro");
    }

    render() {
        return (
            <div id="login-page" className="row">
                
                <Header />
                <div className="col s12 z-depth-6 card-panel">
                    
                    <form className="login-form" onSubmit={this.handleLogin}>
                        <div className="row center-align">
                            <h5>Login</h5>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">person</i>
                                <input className="validate" id="username" type="text"/>
                                <label htmlFor="username" data-error="wrong" data-success="right">Usuário</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">lock_outline</i>
                                <input id="password" type="password" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="input-field col s12 center-align">
                                <button type="submit" className="btn waves-effect waves-light col s12">CONFIRMAR</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 center-align">
                                <p className="margin medium-small"><a href="www.google.com">LIMPAR</a></p>
                            </div>
                        </div>
                    
                    </form>
                </div>
            </div> 
            
        )
    }
}
