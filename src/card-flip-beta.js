import React, { Component } from 'react';
import './App.css';
import evelyn from "./assets/evelyn.png";
import nicola from "./assets/nicola.png";
import ReactCardFlip from 'react-card-flip';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            nicCard: false,
            evCard: false
        }
    }
    
  render() {
      var nicCard = null;
      var evCard = null;
      if (this.state.nicCard === false){
          nicCard = (
            <div className="card" 
              onClick={()=>this.setState({ nicCard: true })}>
            <img src={nicola} style={photo} />
            <div>Nicola</div>
            <div>Description</div>
        </div>
          )
      } else if (this.state.nicCard === true){
          nicCard = (
          <div
              className="card"
              onClick={ ()=>this.setState({ nicCard: false })}>
            <img src={nicola} style={photo} />
            <div>Nicola</div>
            <div>Hello I am a div</div>
            </div>
          )
      }
      if (this.state.evCard === 0){
          evCard = (
            <div 
              className="card"
              onClick={ ()=> this.setState({ evCard:1 })}>
            <img src={evelyn} style={photo}/>
            <div>Evelyn</div>
            <div>Description</div>
        </div>
          )
      } else if (this.state.evCard === 1){
          evCard = (
          <div
              className="card"
              onClick={ ()=>this.setState({ evCard: 0 })}>
            <img src={evelyn} style={photo}/>
            <div>Evelyn</div>
            <div>Hello I am a div</div>
            </div>
          )
      }
    return (
      <div style={container}>
        <div className="pageContainer">
        <div className="pageHeader">Nicola & Evelyn</div>
        <div className="content">
        {nicCard}
        {evCard}
        </div>
        </div>
        </div>
    );
  }
}

export default App;

const container = {
    width: "100%",
    height: "100%",
}
const photo = {
    width: "135px",
    height: "182px"
}