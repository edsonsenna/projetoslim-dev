import React, { Component } from 'react';
import List from '../List';


import { connect } from 'react-redux';

import updateClients from '../../actions/updateClients';

class Cadastro extends Component {

    state = {
        client: {
            name: 'Nome Padrão'
        }
    }

    componentDidMount() {

        const self = this;
        
        this.props.localdb.allDocs({include_docs: true})
                            .then((res) => {

                                var rows = res.rows;

                                var docs = [];

                                rows.forEach(function(value){
                                    docs.push(value.doc);
                                });

                                docs.sort(( a, b ) => {
                                    if ( a.createdAt < b.createdAt ){
                                      return -1;
                                    }
                                    if ( a.createdAt > b.createdAt ){
                                      return 1;
                                    }
                                    return 0;
                                });

                                self.props.updateClients(docs);

                            });

        this.props.localdb.sync(this.props.remotedb, {
            live:true,
            retry: true,
            include_docs: true,
            back_off_function: function(delay){
              if (delay === 0) {
                return 3000;
              }
              return delay;
            },
            filter: function(doc) {
              if(doc._deleted) {
                return false;
              }
              return true;
            }
        })
        .on('change', function(info){
      
            self.props.remotedb.allDocs({include_docs: true})
                                .then((clientes) => {

                                    var rows = clientes.rows;

                                    var docs = [];

                                    rows.forEach(function(value){
                                        docs.push(value.doc);
                                    });

                                    docs.sort(( a, b ) => {
                                        if ( a.createdAt < b.createdAt ){
                                          return -1;
                                        }
                                        if ( a.createdAt > b.createdAt ){
                                          return 1;
                                        }
                                        return 0;
                                    });

                                    self.props.updateClients(docs);

                                });
            
      
      
        })
        .on('error', function(err){

            console.log(err);

        });

        this.props.remotedb.changes({
            since: 'now',
            live: true,
            include_docs: true,
            retry: true, 
            style: 'all_docs'
        }).on('change', function(changes){

            //var response = null;

            self.props.remotedb.allDocs({include_docs: true})
                                .then((clientes) => {

                                    var rows = clientes.rows;

                                    var docs = [];

                                    rows.forEach(function(value){
                                        docs.push(value.doc);
                                    });

                                    docs.sort(( a, b ) => {
                                        if ( a.createdAt < b.createdAt ){
                                          return -1;
                                        }
                                        if ( a.createdAt > b.createdAt ){
                                          return 1;
                                        }
                                        return 0;
                                    });

                                    self.props.updateClients(docs);

                                });

        });

    }

    createClient =  (e, client) => {

        e.preventDefault();

        client.createdAt = new Date();

        const self = this;
        
        this.props.localdb.post({ ...client })
                        .then((res) => { 

                            self.props.localdb.allDocs({include_docs: true})
                                .then((res) => {

                                    var rows = res.rows;

                                    var docs = [];

                                    rows.forEach(function(value){
                                        docs.push(value.doc);
                                    });

                                    docs.sort(( a, b ) => {
                                        if ( a.createdAt < b.createdAt ){
                                        return -1;
                                        }
                                        if ( a.createdAt > b.createdAt ){
                                        return 1;
                                        }
                                        return 0;
                                    });

                                    self.props.updateClients(docs);

                                });
                        });

    }

    updateValue = (e) => {

        const { client } = this.state;

        this.setState({
            client: {...client, [e.target.name]: e.target.value }
        });

    }

    render() {

        const { clientes } = this.props;

        if(!clientes) { 
            return <h2>Loading...</h2>
        }

        return(
            <div className="row">
                <div className="col s6">
                    <List clientes={this.props.clientes} />
                </div>
                <div className="col s6">
                    <form onSubmit={(e) => {
                                    this.createClient(e,  this.state.client)
                                }}>

                            <label>Nome do Cliente</label>
                            <input id="name" type="text" name="name" onChange={this.updateValue}/>
                            <button className="btn waves-effect waves-light" type="submit" name="action">
                            Cadastrar <i className="material-icons right">send</i>
                            </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    clientes: state.clientes,
    localdb: state.localdb,
    remotedb: state.remotedb
});

const mapDispatchToProps = dispatch => ({
    updateClients: (clientes) => dispatch(updateClients (clientes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);

/// <Header />
//<SideBar />