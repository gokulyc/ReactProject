import React from 'react';
import classes from './Cockpit.module.css';
const cockpit = (props) => {
    let btnClass = [classes.Button];
    if (props.showPersons) {
        btnClass.push(classes.Red);
    }
    const p_classes = []; // status css classes
    if (props.persons.length <= 2) {
        p_classes.push(classes.red); // red 
    }
    if (props.persons.length <= 1) {
        p_classes.push(classes.bold); // red and bold
    }
    return (
        <div >
            <h1>Hi , Welcome to React app</h1>
            {/* bind argument with function 1st way || efficient way <button onClick={this.swicthNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
            <p className={p_classes.join(' ')}>Persons list status</p>
            <button className={btnClass.join(' ')} statusp={props.show_person}
                onClick={props.clicked}>Switch Name</button>
        </div>

    );
};

export default cockpit;