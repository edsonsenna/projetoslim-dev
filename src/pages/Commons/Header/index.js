import React, { Component } from 'react';

import logo from '../../../assets/logo.png';
import './styles.css';

export default class Header extends Component {

    render() {
        return (
            <div class="row s12 header">
                <div class="img-header">
                    <img src={logo} alt="Logo" ></img>
                </div>
            </div>

        )
    }
}