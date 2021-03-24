import React from 'react';

const Client = (props) => {
    console.log('[Client.js] rendering...');
return (
    <div>
        <p onClick={props.click}>My name is {props.name} and I'm interest in the {props.model}</p>
        <p>{props.children}</p>
        {/* the value will show the actual name before we change it */}
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};

export default Client;