import React, { Component } from 'react'

export class WelcomeDestructuring extends Component {
    render() {
        const{fname,lname}=this.props
        return (
            <div>
                <h1>{fname} {lname}</h1>
            </div>
        )
    }
}

export default WelcomeDestructuring
