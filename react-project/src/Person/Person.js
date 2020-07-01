import React from 'react';
import './Person.css'
const person = (props) => {
    return (
        <div className="Person">
            <span onClick={props.click}>I'm {props.name} and age is {props.age}  </span>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person