import React, { Component } from 'react'

class ClassClick extends Component {
     classClickHandler = () => {
        console.log("class event is trigered")
    }
    render() {
        return (
            <div>
                <button onClick={this.classClickHandler}>class button</button>
            </div>
        )
    }
}

export default ClassClick
