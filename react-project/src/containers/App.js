import React, { Component } from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

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

    let personsf = null;
    // let btnClass = [classes.Button];
    if (this.state.show_person) {
      personsf = (
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      // btnClass.push(classes.Red);

    }


    return (
      //<StyleRoot></StyleRoot>
      <div className={classes.App} >
        <Cockpit showPersons={this.state.show_person}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />

        {personsf}

      </div >

    );
  }
}


// export default Radium(App);
export default App;
