import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
import "../App.css";
import { InputContext } from "../contexts/InputContext";

class TodoContainer extends Component {
  constructor() {
    super();
    this.state = {
      // id:3,
      todos: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data }));
  }

  addTodo = (todoTitle) => {
    let newTodo = {
      id: uuidv4(),
      title: todoTitle,
      completed: false
    };

    this.setState({
      // id: this.state.id+1,
      todos: [...this.state.todos, newTodo]
    });
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        })
      ]
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodo} />
          <InputContext.Provider
            value={{
              todos: this.state.todos,
              handleChangeProps: this.handleChange,
              delTodoProps: this.delTodo,
              updateProps: this.setUpdate
            }}
          >
            <TodoList />
          </InputContext.Provider>
        </div>
      </div>
    );
  }
}

export default TodoContainer;
