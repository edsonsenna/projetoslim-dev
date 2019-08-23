import React, { Component } from 'react';


import './App.css';

import Routes from './routes.js';

import PouchDB from 'pouchdb';

import { connect } from 'react-redux';

import updateClients from './actions/updateClients';
import setDb from './actions/setDb';


class App extends Component {

  UNSAFE_componentWillMount() {

    var localDB = new PouchDB('clientes-catraca');
    var remoteDB = new PouchDB('http://134.209.168.27:5984/clientes-catraca');

    this.props.setDb(localDB, remoteDB);

  }

  render() {
    return (
      <Routes  />
    );
  }
}

const mapStateToProps = state => ({
  clientes: state.clientes
});

const mapDispatchToProps = dispatch => ({
  updateClients: (clientes) => dispatch(updateClients (clientes)),
  setDb: (localDB, remoteDB) => dispatch(setDb (localDB, remoteDB))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


/*
(
    <div>
      <Header></Header>
      <Login></Login>
    </div>
    
    
  ); */