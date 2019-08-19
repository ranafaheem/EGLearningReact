import React, { Component } from 'react'

export class ElementVariable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        let message
        if (this.state.isLoggedIn)
        {
            message=<div>Hello Faheem</div>
        }
        else
        {
            message=<div>Hello Guest</div>
            }
        return (
            <div>{ message }</div>
        )
    }
}

export default ElementVariable
