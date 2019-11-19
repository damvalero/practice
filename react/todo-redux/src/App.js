import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { todo } from "./todo.json";

import TodoForm from "./Components/TodoForm";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todo
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todo: [...this.state.todo, todo] //here we add a new task
    });
  }

  handleDelete(position) {
    this.setState({
      todo: this.state.todo.filter((elemento, index) => {
        return index !== position;
      })
    });
  }

  render() {
    const todo = this.state.todo.map((todo, index) => {
      return (
        //this div is appear everything in colums
        <div className="col-md-4" key={index}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.handleDelete.bind(this, index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      //this is shown after read the todo in the previous lines
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Task
            <span className="badge badge-pill badge-light ml-2">
              {/* accoutant */}
              {this.state.todo.length}
            </span>
          </a>
        </nav>
        {/* is necessary to put here the division in columns to be rendered */}
        <div className="container">
          <div className="row mt-4">
            <div className="col mt-4 md-3">
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            <div className="col-md-9">
              <div className="row"> {todo} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
