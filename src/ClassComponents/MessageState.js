import React, { Component } from 'react'

export class MessageState extends Component {
    constructor(){
        super()
        this.state = {
           message: 'Welcome Visitor' 
        }
    }

    changeStateMessage = () =>{
        this.setState({
            message: 'Thanks for subscribing'
        })
        console.log("button is clicked")
    }
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={()=> this.changeStateMessage()}> message</button>
            </div>
        )
    }
}

export default MessageState
