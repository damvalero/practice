import React, { Component } from "react";
import "./App.css";
import Cockpit from "./Cockpit/Cockpit";

import ClientsValues from "./components/ClientsValue";

class App extends Component {
  constructor (props){
    super(props);
    console.log('[App.js] constructor');
  }
  // this is a modern way to make the state, in older versions 
  // you can put the state inside the constructor using this
  state = {
    customers: [
      {id:'adadsas', name: "Daniel", model: "Model 3" },
      {id:'erfervv', name: "Annarita", model: "Cyber Truck" },
      {id:'refescsd', name: "Belkis", model: "Model S" },
    ],
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');

  }

  nameChangedHandler = (event, id) => {
    const  clientIndex = this.state.customers.findIndex( c => {
      return c.id === id;
    });
    //REVISAR EL VIDEO DESDEQ AQUI
    //like objects are referenciable we have to create a new object to work over him
    const client = {
      ...this.state.customers[clientIndex]
    };
    // lo de arriba en ES5 seria const client=Object.assign({}, this.state.customers[clientIndex]);

    client.name = event.target.value;

    //esto va a actualizar el array en la posicion del clientIndex
    const clients = [...this.state.customers];
    clients[clientIndex] = client; //y actualiza el client especifico de la linea 26

    this.setState({customers: clients});
  };

  deleteClientHandler = (clientIndex) => {
    //this will fetch all the customers
    // slice() whitouth an argument already make a copy of the array (ES5)
    const clients = this.state.customers.slice();
    //this makes something similar, the spread operator makes that the info of our original array 
    //if spread here in a list, and the array means that is going to be inside the array (this is immutability), 
    //with spread operator is the most modern way
    // const clients = [...this.state.customers];
    //this is going to splice de info and only 1 element
    clients.splice(clientIndex,1);
    this.setState({customers: clients})
  }

  toggleClientHandler = () => {
    const doesShow = this.state.showClients;
    //this will make the toggle between true/false of showCLients
    this.setState({ showClients: !doesShow });
  };

  render() {
    console.log('[App.js] render');
    // default value when charge the page
    let clientsValue = null;

    //the statement inside the if already is making the afirmation if is true
    if (this.state.showClients) {
      clientsValue =
          <ClientsValues 
          customers={this.state.customers}
          clicked={this.deleteClientHandler}
          changed={this.nameChangedHandler}/>;
    }

    return (
      <div className="App">
        <Cockpit 
        // this props is the property appTitle in index.js
          title={this.props.appTitle}
          showClients={this.state.showClients}
          customers={this.state.customers} 
          clicked={this.toggleClientHandler}/>
        {clientsValue}
      </div>
    );
  }
}

export default App;
