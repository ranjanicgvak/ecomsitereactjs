import React from "react";

class Demo extends React.Component {
    render()
    {
        return <p style={{ color:'red' }}>Hi it is important <br></br><Contents/></p>
    }
}

function Contents(){
    return <p style={{ color:'green' }}> Please give more importance </p>
}

export default Demo;