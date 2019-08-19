import React from 'react'

const GreetDestructing = ({fname,lname}) => {
    return (
        <div>
            <h1>{fname}</h1>
        </div>
    )
}

export default GreetDestructing


// There are two ways to destructur one is given obove 

// const GreetDestructing = props => {
//     const {fname,lname}= props
//     return (
//         <div>
//             <h1>{fname}</h1>
//         </div>
//     )
// }