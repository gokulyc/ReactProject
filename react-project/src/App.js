import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 26 },
      { name: "Gokul", age: 27 },
      { name: "Ravi", age: 29 }
    ],
    other: "some oth value"
  }

  swicthNameHandler = (newName) => {
    // console.log("Button Clicked");
    // this.state.persons[0].name = 'Maximilian'; not works
    this.setState({
      persons: [
        { name: "Max", age: 26 },
        { name: "Gokul", age: 27 },
        { name: "Ravi Kumar", age: 29 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: "Max", age: 26 },
          { name: event.target.value, age: 27 },
          { name: "Ravi Kumar", age: 29 }
        ]
      }
    )
  }
  render() {
    const stylebtn = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    };
    return (
      <div className="App" >
        <h1>Hi , Welcome to React app</h1>
        {/* bind argument with function 1st way || efficient way <button onClick={this.swicthNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
        <button style={stylebtn}
          onClick={() => this.swicthNameHandler('Maximilian!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person changed={this.nameChangedHandler} click={this.swicthNameHandler.bind(this, 'Max!!!')} name={this.state.persons[1].name} age={this.state.persons[1].age} >Hobbies: Netflix</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div >
    );
  }
}


export default App;
