import React from 'react';

const properties = (props) => {
    return(
        <p style={{ color: 'black',padding: 2, lineHeight: 10}}>Props : Hello {props.name} and {props.companyname}</p>
    );
}

export default properties;