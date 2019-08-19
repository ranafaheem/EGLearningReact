import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'


class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Rana Faheem'
        }
        console.log('Life Cycle A Constructor')
    }

    static getDerivedStateFromProps(props, states) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('Life Cycle A render')
        return (
            <div>
                Life Cycle Component A
                <LifeCycleB/>
            </div>
           
                
           

        )
    }
}

export default LifeCycleA
