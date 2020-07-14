import React from 'react';
import classes from './Person.module.css'


const person = (props) => {


    return (
        // <div className="Person" style={style}>
        // className={classes.Person}  css__property__randomhash
        <div className={classes.Person}>
            <span onClick={props.click}>I'm {props.name} and age is {props.age}  </span>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

// export default Radium(person);
export default person;