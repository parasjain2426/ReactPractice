import React, { Component, Fragment } from "react";
import { InputContext } from "../contexts/InputContext";
import TodoItem from "./TodoItem";
import ViewTodoSubset from "./ViewTodoSubset";

class TodoList extends Component {
  static inputContext = InputContext;

  FILTER_MAP = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed
  };

  FILTER_NAMES = Object.keys(this.FILTER_MAP);

  state = {
    filter: "All"
  };

  changeFilter = (filterName) => {
    this.setState({
      filter: filterName
    });
  };

  render() {
    return (
      <InputContext.Consumer>
        {(props) => {
          return (
            <Fragment>
              <ViewTodoSubset
                showAllTasks={this.changeFilter}
                showActiveTasks={this.changeFilter}
                showCompletedTasks={this.changeFilter}
              />
              <ul>
                {props.todos
                  .filter(this.FILTER_MAP[this.state.filter])
                  .map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                  ))}
              </ul>
            </Fragment>
          );
        }}
      </InputContext.Consumer>
    );
  }
}

export default TodoList;
