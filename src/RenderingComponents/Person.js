import React from 'react'

function Person({person}) {
    return (
        <div>
            <h6>I am {person.name} my no is {person.id} and my skills are {person.skill}</h6>
        </div>
    )
}

export default Person
