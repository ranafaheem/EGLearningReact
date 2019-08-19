import React from 'react'

function IndexAsaKey() {
    const names = ['bruce', 'Clark', 'Diana','bruce']
    const nameList = names.map((name,index)  => <h6 key={index}>{name}</h6>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default IndexAsaKey

