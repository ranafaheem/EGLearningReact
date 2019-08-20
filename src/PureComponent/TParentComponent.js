// import React, { Component, PureComponent } from 'react'
import React, { Component} from 'react'
import PureComp from './PureComp';
import RegularComponent from './RegularComponent'
import MemoComp from '../MemoComponent/MemoComp'

// class TParentComponent extends PureComponent {
    class TParentComponent extends Component {    
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Faheem"
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:"Faheem"
            })
        },2000)
    }
    render() {
        console.log('XXXXXXXXXXXXXXXXXX    PARENT COMPONENT     XXXXXXXXXXXXXX')
        return (
           
            <div>
                TParent Component 
                {/* <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp> */}

                {/* Memo  */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
               
        )
    }
}

export default TParentComponent
