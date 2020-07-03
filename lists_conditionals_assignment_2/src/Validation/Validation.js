import React from 'react';

const validation = (props) => {
    let validationmsg = 'Text  long enough !!';

    if (props.inputlength <= 5) {
        validationmsg = 'Text too short !!!';
    }
    return (
        <div>
            <p>{validationmsg}</p>
        </div>
    );
};

export default validation;