import React from 'react'
import './Mystyle.css'


function Stylesheet(props) {
    let className = props.primary ? 'primary' : 'secondary'
    return (
        <div>
            <h1 className={ className}>Style Sheets</h1>
            
        </div>
    )
}

export default Stylesheet
