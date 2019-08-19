import React, { Component } from 'react'
import ChildComponent from '../FunctionalComponents/ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(){
        // alert('Hello' + this.state.parentName)
        alert(`Hello ${this.state.parentName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent> 
            </div>
        )
    }
}

export default ParentComponent
  