import React from 'react'

const Greet = (props) => {
    console.log(props)
    return (
        <div>
           <h3>Greet FC {props.name} is a {props.children}</h3> 
        </div>
    )
}

export default Greet
