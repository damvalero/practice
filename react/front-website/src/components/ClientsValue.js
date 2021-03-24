import React from "react";
import Client from "../client-folder/Client";

// this is a functional component, dont manage states
const clientValue = (props) => {
console.log('ClientsValue.js rendering...');
/* this will bring the data of customers and create a new array that we can modify */
    return props.customers.map((client, index) => {
    return (<Client 
    click={() => props.clicked(index)}
    name={client.name} 
    model={client.model}
    key={client.id}
    // this one receive the event
    changed={(event) => props.changed(event, client.id)}/>
    );
  });
}
  export default clientValue;