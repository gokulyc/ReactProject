import React from 'react';
import './Person.css'
import styled from 'styled-components';
// import Radium from 'radium';
const person = (props) => {
    const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media (min-width: 500px) {
        width: 450px;
} `;
    // const style = {
    // '@media (min-width:500px)': {
    //     width: '450px',
    // }
    // }
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <span onClick={props.click}>I'm {props.name} and age is {props.age}  </span>
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
};

// export default Radium(person);
export default person;