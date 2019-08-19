import React, { Component } from 'react'

export class TernaryOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
        return (
            this.state.isLoggedIn ?
                <div>Hello Faheem</div> :
                <div>Hello Guest</div>
        )
    }
}

export default TernaryOperator
