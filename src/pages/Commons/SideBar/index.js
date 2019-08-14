import React, { Component } from 'react';

import './styles.css';

export default class SideBar extends Component {
  render() {
    return (
       <div class="side-menu">
           <ul>
               <li><a href="/Atualiazacao"><i class="material-icons prefix">cloud_download</i>Atualização</a></li>
               <li><a href="/Atualiazacao"><i class="material-icons prefix">person</i>Inicio</a></li>
               <li><a href="/Atualiazacao"><i class="material-icons prefix">search</i>Busca Cliente</a></li>
               <li><a href="/Atualiazacao"><i class="material-icons prefix">compare_arrows</i>Visitante</a></li>
               <li><a href="/Atualiazacao"><i class="material-icons prefix">build</i>Configuração</a></li>
           </ul>
           

       </div>
    );
  }
}
