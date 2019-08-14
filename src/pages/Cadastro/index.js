import React, { Component } from 'react';
import Header from '../Commons/Header';
import SideBar from '../Commons/SideBar';



export default class Cadastro extends Component {
    render() {
        return(
            <div id="card-cadastro" class="row">
                <Header />
                <SideBar />

                <div class="col s12">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Controle Catraca</span>
                            <form class="container">
                                <div class = "row">

                                <div class="input-field col m6">
                                    <input id="email" type="email" class="validate" />
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field col m6">
                                    <button class="btn waves-effect waves-light" type="submit" name="action">
                                    Submit <i class="material-icons right">send</i>
                                    </button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}