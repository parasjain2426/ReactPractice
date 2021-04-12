import React, { Component } from "react";
import { InputContext } from "../contexts/InputContext";
import styles from "./TodoItem.module.css";

class TodoItem extends Component {
  static inputContext = InputContext;
  state = {
    edit: false
  };

  handleEdit = () => {
    this.setState({
      edit: true
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      this.setState({
        edit: false
      });
    }
  };

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through"
    };

    const { id, completed, title } = this.props.todo;
    let viewMode = {};
    let editMode = {};

    if (this.state.edit) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <InputContext.Consumer>
        {(props) => {
          return (
            <li className={styles.item}>
              <div onDoubleClick={this.handleEdit} style={viewMode}>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => props.handleChangeProps(id)}
                  className={styles.checkbox}
                />
                <span style={this.props.todo.completed ? completedStyle : null}>
                  {title}
                </span>
                <button
                  onClick={() => {
                    props.delTodoProps(id);
                  }}
                >
                  Delete
                </button>
              </div>
              <input
                type="text"
                className={styles.textInput}
                style={editMode}
                value={title}
                onChange={(e) => props.updateProps(e.target.value, id)}
                onKeyDown={this.handleUpdatedDone}
              />
            </li>
          );
        }}
      </InputContext.Consumer>
    );
  }
}

export default TodoItem;
