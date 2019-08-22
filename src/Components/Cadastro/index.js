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

        //this.props.localdb.sync(this.props.remotedb);
        const self = this;

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
      
            const clientes = self.props.remotedb.allDocs({include_docs: true});
            let clients = {};
      
            clientes.rows.forEach( n => clients[n.id] = n.doc);
            
            self.props.updateClients(clients.reverse());
      
      
        }).on('active',function(info){
        })
        .on('complete',function(info){
          }).on('error', function(err){
        });

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

        const res =  this.props.localdb.post({ ...client });

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