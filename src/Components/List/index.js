import React, { Component } from 'react';
//import { useGet } from "react-pouchdb";

// import { Container } from './styles';

// const doc = useGet(
//     {id: "restaurant"}
// );

export default class List extends React.Component {

  componentDidMount() {
    console.log(this.props.clientes);
  }

  renderClientes() {
    
      //const clients = Object.values(this.props.clients);

      const self = this.props;

      var vals = Object.keys(this.props.clientes).map(function(key) {
        return <div ><p>{self.clientes[key].name}</p></div>;
      });

      return vals.reverse();

      //return clients.map((n) => <div key={`note_${n._id}`} ><h2>{n.nome}</h2></div>);
  }

  render() {
    
    return (
      <div >
          <h3>Lista de Clientes</h3>
          {this.renderClientes()}
     </div>
    );
  }
}
