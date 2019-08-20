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
        console.log('LifecycleB componentDidMount')
        return true
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate ')
        return null
    }

    getSnapshotBeforeUpdate() {
        console.log('lifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('lifecycleB componentDidUpdate')
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
