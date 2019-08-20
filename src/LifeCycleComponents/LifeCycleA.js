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
        return true
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate ')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('lifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('lifecycleA componentDidUpdate')
    }


    changeState = () => {
        this.setState({
            name:'RMF'
        })
    }
    render() {
        console.log('Life Cycle A render')
        return (
            <div>
                Life Cycle Component A
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
           
                
           

        )
    }
}

export default LifeCycleA
