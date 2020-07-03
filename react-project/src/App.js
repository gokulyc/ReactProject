import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Userinput from './Assigment1/UserInput'
import Useroutput from './Assigment1/UserOutput'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 26 },
      { id: 2, name: "Gokul", age: 27 },
      { id: 3, name: "Ravi", age: 29 }
    ],
    other: "some oth value",
    Users: [
      "Max", "Gokul", "Ravi"
    ],
    show_person: false,

  }
  usernameChangedHandler = (event) => {
    this.setState({
      Users: [
        event.target.value, "Gokul", "Ravi"
      ],
    });
  }

  deletePersonHandler = (person_index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(person_index, 1)
    this.setState({ persons: persons });

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: persons })

  }
  togglePersonsHandler = (event) => {
    const doesShow = this.state.show_person;
    this.setState({ show_person: !doesShow });

  }

  render() {
    const stylebtn = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

    };
    let personsf = null;
    if (this.state.show_person) {
      personsf = (
        <div>
          {this.state.persons.map((per, index) => {
            return <Person name={per.name}
              click={this.deletePersonHandler.bind(this, index)}
              age={per.age}
              key={per.id}
              changed={(event) => this.nameChangedHandler(event, per.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App" >
        <h1>Hi , Welcome to React app</h1>
        {/* bind argument with function 1st way || efficient way <button onClick={this.swicthNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
        <button style={stylebtn}
          onClick={this.togglePersonsHandler}>Switch Name</button>

        {personsf}
        <Userinput name="Gokul"
          changed={this.usernameChangedHandler}
          currentname={this.state.Users[0]}
        /><br></br>
        <Useroutput username={this.state.Users[0]} /><br></br>
        <Useroutput username={this.state.Users[1]} /><br></br>
        <Useroutput username={this.state.Users[2]} />
      </div >
    );
  }
}


export default App;
