import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

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
    let btnClass = [classes.Button];
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
      btnClass.push(classes.Red);

    }
    const p_classes = []; // status css classes
    if (this.state.persons.length <= 2) {
      p_classes.push('red'); // red 
    }
    if (this.state.persons.length <= 1) {
      p_classes.push('bold'); // red and bold
    }

    return (
      //<StyleRoot></StyleRoot>
      <div className={classes.App} >
        <h1>Hi , Welcome to React app</h1>
        {/* bind argument with function 1st way || efficient way <button onClick={this.swicthNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
        <p className={p_classes.join(' ')}>Persons list status</p>
        <button className={btnClass.join(' ')} statusp={this.state.show_person}
          onClick={this.togglePersonsHandler}>Switch Name</button>

        {personsf}

      </div >

    );
  }
}


// export default Radium(App);
export default App;
