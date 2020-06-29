import React from 'react';
const person = (props) => {
    return (
        <div>
            <span>I'm {props.name} and age is {props.age}  </span>
            <span>{props.children}</span>
        </div>
    )
};

export default person