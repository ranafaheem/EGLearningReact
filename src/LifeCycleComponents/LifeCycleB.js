import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Rana Faheem'
        }
        console.log('Life Cycle B Constructor')
    }

    static getDerivedStateFromProps(props, states) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    render() {
        console.log('Life Cycle B render')
        return (
            <div>
                Life Cycle Component B
            </div>
        )
    }
}

export default LifeCycleB
