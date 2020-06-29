import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 26 },
      { name: "Gokul", age: 27 },
      { name: "Ravi", age: 29 }
    ]
  }

  swicthNameHandler = () => {
    console.log("Button Clicked");
    // this.state.persons[0].name = 'Maximilian'; not works
    this.setState({
      persons: [
        { name: "Maximilian", age: 26 },
        { name: "Gokul", age: 27 },
        { name: "Ravi Kumar", age: 29 }
      ]
    });
  }
  render() {
    return (
      <div className="App" >
        <h1>Hi , Welcome to React app</h1>
        <button onClick={this.swicthNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Hobbies: Netflix</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
