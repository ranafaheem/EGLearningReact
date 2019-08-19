import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:'wellcome'
         }
         this.handleClick=this.handleClick.bind(this)
     }

     handleClick(){
         this.setState({
             message:'Bye Bye'
         })
        console.log(this)
     }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.handleClick.bind(this)}>Click Binding Method</button> */}
                {/* <button onClick={() => this.handleClick()}>Click Arrow Function Approach</button> */}
                <button onClick={this.handleClick}>Click Arrow Official way</button>
            </div>
        )
    }
}

export default EventBind
