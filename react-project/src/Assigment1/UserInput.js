import React from 'react';
// import './Person.css'
const userinput = (props) => {
    const inputstyle = {
        border: '2px solid red'
    }
    return (
        <div className="UserInput">
            <input type="text" style={inputstyle}
                value={props.currentname}
                onChange={props.changed} />
        </div>
    )
};

export default userinput