import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default class AddPerson extends Component {
  constructor() {
    super();
    this.state = {
      // at the beggining empty to put the information
      name: "",
      age: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //method that will update each time while user is writting
  onValueChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      //setState will allow to update the state
      [name]: value
    });
  }

  onFormSubmit(event) {
    //this will avoid the refresh of the page
    event.preventDefault();

    this.props.onAddPerson(this.state);
    this.setState({
      name: "",
      age: ""
    });
    console.log(this.props);
    // const { email, password } = this.state;
    // AuthenticationServices.logInService({
    //   email,
    //   password
    // })
    //   .then(user => {
    //     this.props.setUser(user);
    //     this.props.history.push("/home");
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <div>
        <Container className="text-white container--center">
          <div className="mt-5">
            <h3>Add a person</h3>
            <br />
            <Form onSubmit={this.onFormSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Add the name"
                  name="name"
                  onChange={this.onValueChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  placeholder="Add the age"
                  name="age"
                  onChange={this.onValueChange}
                />
              </Form.Group>
              <Button className="btn-light mr-2" type="submit">
                Save
              </Button>
              <Button className="btn-light" type="submit">
                Cancel
              </Button>
            </Form>
            <br />
          </div>
        </Container>
      </div>
    );
  }
}
