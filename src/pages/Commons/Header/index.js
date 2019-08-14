import React, { Component } from 'react';

import logo from '../../../assets/logo.png';
import './styles.css';

export default class Header extends Component {

    render() {
        return (
            <div class="header">
                <div id="img-header">
                    <img src={logo} alt="Logo" />
                </div>
            </div>

        )
    }
}