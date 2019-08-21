import React, { Component } from 'react';
import Header from '../Commons/Header';
import SideBar from '../Commons/SideBar';
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
        
        var docs = this.props.remotedb.allDocs({include_docs: true});

        this.props.remotedb.changes()

        const self = this;

        this.props.remotedb.changes({
            since: 'now',
            live: true,
            include_docs: true,
            retry: true, 
            style: 'all_docs'
        }).on('change', function(changes){

            console.log(changes);

            var response = null;

            response = self.props.remotedb.allDocs({
                    include_docs: true,
                    attachments: true
                }, 
                function(err, res){
                    if(err) return null;
                    console.log("Callback => ", res);
                    let clients = {};
    
                    res.rows.forEach( n => clients[n.id] = n.doc);
                    
                    self.props.updateClients(clients);

                    console.log("Self => ", self);


                    return res;
            });
        });

        console.log(this.props);
    }

    createClient =  (e, client) => {

        e.preventDefault();

        client.createdAt = new Date();

        const res =  this.props.remotedb.post({ ...client });

        console.log(res);
    }

    updateValue = (e) => {

        //console.log('Calling', this.props);

        const { client } = this.state;

        this.setState({
            client: {...client, [e.target.name]: e.target.value }
        });

    }

    render() {
        return(
            <div id="card-cadastro" className="row">
                <Header />
                <SideBar />
                <List clientes={this.props.clientes} />
                <div className="col s6">
                    <div className="card">
                        <div className="card-content">
                            <p>{ this.props.clients }</p>
                            <span className="card-title">Controle Catraca</span>
                            <form className="container" onSubmit={(e) => {
                                            this.createClient(e,  this.state.client)
                                        }}>
                                <div className = "row">

                                <div className="input-field col m6">
                                    <input id="name" type="text" name="name" onChange={this.updateValue}/>
                                    <label>Nome do Cliente</label>
                                </div>
                                <div className="input-field col m6">
                                    <button className="btn waves-effect waves-light" type="submit" name="action">
                                    Cadastrar <i className="material-icons right">send</i>
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

const mapStateToProps = state => ({
    clientes: state.clientes,
    localdb: state.localdb,
    remotedb: state.remotedb
});

const mapDispatchToProps = dispatch => ({
    updateClients: (clientes) => dispatch(updateClients (clientes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);