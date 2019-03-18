import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ModalGroupLayer from './ModalGroupLayer.js';
import ModalGroup from './ModalGroup.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state={showModal : false, showAnotherModal:false};
    this.handleclick = this.handleclick.bind(this);
    this.handleAnotherClick = this.handleAnotherClick.bind(this);
    }

  handleclick() {
    alert("first test completed ");
    this.setState({showModal:true});
  }

  handleAnotherClick() {
    this.setState({showAnotherModal:true});
  }

  render() {
    return (
      <React.Fragment>
        <div className="containerMain">
          this is sample text
          <button onClick = {(event)=>this.handleclick()}> Click </button>
          {this.state.showModal ?
          <div className="modal">
        
          <ModalGroup layer={1}>
          
            this is a test
            <button onClick={(event) => this.handleAnotherClick(event)}> Click me </button>
        
          </ModalGroup> 
          </div>
          : null
          }
          { this.state.showAnotherModal ?
          <div className="test"> check is completed</div>
          : null
          
          }
        </div>
        <ModalGroupLayer layer={1}>
        </ModalGroupLayer>
      </React.Fragment>
    );
  }
}

export default App;
