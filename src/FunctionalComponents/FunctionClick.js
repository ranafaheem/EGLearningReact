import React from 'react'

function FunctionClick() {
    const clickEvent=()=>{
        console.log("Button clicked")
    }
    return (
        <div>
            <button onClick={clickEvent}> click me</button>
        </div>
    )
}

export default FunctionClick
