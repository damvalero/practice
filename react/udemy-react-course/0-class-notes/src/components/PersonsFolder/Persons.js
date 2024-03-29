import React from 'react';

import Person from '../PersonFolder/Person';

const persons = (props) => 
    props.persons.map((person, index) => {
        return <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}>

        </Person>
      });

export default persons;      