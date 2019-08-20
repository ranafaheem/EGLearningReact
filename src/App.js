import React from 'react';
import logo from './logo.svg';
import './App.css';


// Class Components
import welcome from './ClassComponents/Welcome'
import MessageState from './ClassComponents/MessageState'
import CounterState from './ClassComponents/CounterState'
import WelcomeDestructuring from './ClassComponents/WelcomeDestructuring';
import ClassClick from './ClassComponents/ClassClick'
import EventBind from './ClassComponents/EventBind'
import ParentComponent from './ClassComponents/ParentComponent'

// Functional Components
import  Greet  from './FunctionalComponents/Greet'
import GreetDestructing from './FunctionalComponents/GreetDestructing'
import FunctionClick from './FunctionalComponents/FunctionClick'

//  Conditional Rendering
import UserGreeting from './RenderingComponents/IfElse'
import ElementVariable from './RenderingComponents/ElementVariable';
import TernaryOperator from './RenderingComponents/TernaryOperator'
import ShortCircuitOperator from './RenderingComponents/ShortCircuitOperator';
import ListRendering from './RenderingComponents/ListRendering';
import IndexAsaKey from './RenderingComponents/IndexAsaKey'

// Styling
import Stylesheet from './Styling/Stylesheet'
import Inline from './Styling/Inline'

//Form Handling
import Basicform from './Forms/Basicform'


//Life Cycle of Components
import LifeCycleA from './LifeCycleComponents/LifeCycleA'

//Fragment
import FragementDemo from './Fragments/FragementDemo'
import Table from './Fragments/Table'


//Pure Component
// import PureComp from './PureComponent/PureComp'
// import RegularComponent from './PureComponent/RegularComponent'
import TParentComponent from './PureComponent/TParentComponent'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      {/* ClassComponents */}

        {/* Understanding of Class components */}
        {/* <Welcome/> */}

         {/* Props */}
        {/* <Welcome name="Antja"></Welcome> */}
        {/* <Welcome name="Antja">HR</Welcome> */}
        
        {/* State */}
        {/* <MessageState></MessageState> */}

        {/* State Dos and do nots */}
        {/* <CounterState></CounterState> */}
      
        {/* destructuring */}
        {/* <WelcomeDestructuring fname="Rana" lname="Faheem"></WelcomeDestructuring> */}
      
        {/* EventHandling */}
        {/* <ClassClick></ClassClick> */}
      
        {/* Event Binding */}
        {/* <EventBind></EventBind> */}
        
        {/* Child Parent communication */}
        {/* <ParentComponent></ParentComponent> */}
      {/* Functional Components */} 

        {/* Understanding of Functional components */}
        {/* <Greet/> */}

        {/* Props */}
        {/* < Greet name="Rana Faheem" ></ Greet> */}
        {/* < Greet name="Rana Faheem" >Internee</ Greet> */}

        {/* Destructuring */}
        {/* <GreetDestructing fname="rana" lname="faheem"></GreetDestructing> */}

        {/* EventHandling */}
        {/* <FunctionClick></FunctionClick> */}

        {/* Rendering */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <ElementVariable></ElementVariable> */}
        {/* <TernaryOperator></TernaryOperator> */}
        {/* <ShortCircuitOperator></ShortCircuitOperator> */}
        {/* <ListRendering></ListRendering> */}
        {/* <IndexAsaKey></IndexAsaKey> */}

        {/* Styling CSS */}
        {/* <Stylesheet primary={false}></Stylesheet> */}
        {/* <Inline></Inline> */}
        
        {/* Form Handling */}
         {/* <Basicform></Basicform>  */}

        {/* Life Cycle of components */}
         {/* <LifeCycleA></LifeCycleA> */}

        {/* Fragement */}
        {/* <FragementDemo></FragementDemo> */}
        {/* <Table></Table> */}


        {/* Pure Components */}
        {/* <PureComp></PureComp> */}
        {/* <RegularComponent></RegularComponent> */}
        <TParentComponent></TParentComponent>
      </header>
    </div>
  );
}

export default App;
