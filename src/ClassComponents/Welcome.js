import React, { Component } from 'react'

 class Welcome extends Component {
    render() {
        return (
            <div>
                <h3>Welcome CC {this.props.name} is {this.props.children}</h3>
            </div>
        )
    }
}

export default Welcome
