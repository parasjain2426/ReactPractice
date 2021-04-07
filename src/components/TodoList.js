import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import ViewTodoSubset from './ViewTodoSubset';

class TodoList extends Component{

    FILTER_MAP = {
        All: () => true,
        Active: todo => !todo.completed,
        Completed: todo => todo.completed
      };
      
    FILTER_NAMES = Object.keys(this.FILTER_MAP);

    state = {
        filter:'All'
    }

    changeFilter = filterName=>{
        this.setState({
            filter:filterName
        })
    }
    
    render(){
        return(
            <Fragment>
                <ViewTodoSubset 
                showAllTasks={this.changeFilter} 
                showActiveTasks={this.changeFilter} 
                showCompletedTasks={this.changeFilter}/>
                <ul>
                    {this.props.todos.filter(this.FILTER_MAP[this.state.filter]).map(todo => (
                        <TodoItem key={todo.id} 
                        todo={todo} 
                        handleChangeProps={this.props.handleChangeProps}
                        delTodoProps={this.props.delTodoProps}
                        updateProps={this.props.updateProps}/>
                    ))
                    }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;