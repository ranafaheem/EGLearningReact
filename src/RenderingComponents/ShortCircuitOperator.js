import React, { Component } from 'react'

export class ShortCircuitOperator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {

        return (
            this.state.isLoggedIn && <div>Welcome Faheem</div>
        )
    }
}

export default ShortCircuitOperator
