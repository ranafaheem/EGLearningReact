import React, { Component } from 'react'

 class CounterState extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     
     increment = () => {
        
        // this.setState({
        //     count: this.state.count+1
        // },()=>{console.log("Increment is pushed",this.state.count)})

        // lets do this different way
        this.setState(prevState=>({
            count: prevState.count+1
        }))

    }

    incrFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.incrFive()}}> Counter {this.state.count}</button>
            </div>
        )
    }
}

export default CounterState
