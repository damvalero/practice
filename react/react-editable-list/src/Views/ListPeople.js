import React, { Component } from "react";

import { list } from "../list.json";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddPerson from "./AddPerson";

export default class ListPeople extends Component {
  constructor() {
    super();
    this.state = {
      list
    };
    this.handleAddPerson = this.handleAddPerson.bind(this);
  }

  handleAddPerson(list) {
    this.setState({
      list: [...this.state.list, list]
    });
  }

  deletePerson(position) {
    this.setState({
      list: this.state.list.filter((event, index) => {
        return index !== position;
      })
    });
  }

  render() {
    //access to each element in the object list
    const list = this.state.list.map((list, index) => {
      return (
        <div key={index} className="col-sm-6 pl-6">
          <Card bg="dark" text="white" style={{ width: "18rem" }}>
            <Card.Header> Name: {list.name}</Card.Header>
            <Card.Body>
              <Card.Text>Age: {list.age}</Card.Text>

              <Button
                variant="success mr-2"
                // onClick={() => props.deleteRecipe(props.recipe._id)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={this.deletePerson.bind(this, index)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
          <br />
        </div>
      );
    });

    return (
      <div className="container">
        <AddPerson onAddPerson={this.handleAddPerson} />
        <div className="row mt-4">{list}</div>
      </div>
    );
  }
}
