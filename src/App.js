import React, { Component } from 'react';
import logo from './block-bird-p.png';
import './App.css';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Context',
        completed: false
      },
      {
        id: 2,
        title: 'Http',
        completed: false
      },
      {
        id: 3,
        title: 'Charts',
        completed: false
      },
      {
        id: 4,
        title: 'ToDo',
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logos" alt="logo" />
          <p>
            Block Birdthis.props.
          </p>
        </header>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }


  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
}

export default App;
