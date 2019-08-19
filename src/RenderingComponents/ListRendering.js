import React from 'react'
import Person from './Person'

function ListRendering() {
    // const names = ['Faheem', 'Stephen', 'Karim', 'Antje']
    // const nameList = names.map(name => <h3>{name}</h3>)
    const persons = [
        {
            id: 1,
            name: 'Faheem',
            age: 26,
            skill:'React'
        },
        {
            id: 2,
            name: 'Stephen',
            age: 26,
            skill:'supervision'
        },
        {
            id: 3,
            name: 'Antje',
            age: 26,
            skill:'HRM'
        },
        {
            id: 4,
            name: 'Karim',
            age: 26,
            skill:'React Developer'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {/* {nameList} */}
            {personList}
        </div>
    )
}

export default ListRendering

