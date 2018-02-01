import React, { Component } from 'react';
import './App.css';
import evelyn from "./assets/evelyn.png";
import nicola from "./assets/nicola.png";
import headerImg from "./assets/header-img.png";
import github from "./assets/social-media-04.png";
import linkedin from "./assets/social-media-05.png";
import backFlip from "./assets/back-06.png";
import mySocket from 'socket.io-client';
import Chat from './chat.js';

class App extends Component {
    constructor(props){
    super(props);
        this.state= {
            nicCard: false,
            evCard: false,
            chat: false
        }
    }
  render() {
      var nicCard = null;
      var evCard = null;
      
      var chatCard = null;
      if (this.state.chat === false){
        chatCard = (
            <div className="card">
              <div className="card-header">bcit d3</div>
              <hr className="hr-pretty"/>
            <div className="card-name">chat</div>
              <hr className="hr-pretty-yellow"/>
          <button onClick={()=>this.setState({ chat: true })}>Click to chat!</button>
        </div>
      )
  } else if (this.state.chat === true){
      chatCard = (
            <div className="card">
              <div className="card-header">bcit d3</div>
              <hr className="hr-pretty"/>
            <div className="card-name">chat</div>
              <hr className="hr-pretty-yellow"/>
                  <div><Chat /></div>
        <button onClick={()=>this.setState({ chat : false })}>End Chat</button>
        </div>
)
    }
    
      
      if (this.state.nicCard === false){
          nicCard = (
            <div className="card">
              <div className="card-header">bcit d3</div>
              <hr className="hr-pretty"/>
            <div className="card-name">nicola parker</div>
            <img className="mx-auto d-block" src={nicola} style={photo} />
              <hr className="hr-pretty-yellow"/>
            <div className="card-desc">Full Stack Development
              <div className="italics"> & frisbees</div>
              <button
              className="btn"
              onClick={()=>this.setState({ nicCard: true })}>ABOUT ME
            </button>
              </div>
        </div>
          )
      } else if (this.state.nicCard === true){
          nicCard = (
          <div className="card">
              <div className="card-header">nicola parker</div>
              <hr className="hr-pretty"/>
                <div className="icons">
                    <a href="https://github.com/nicprkr" target="_blank">
                        <img className="iconImg" src={github}/>
                    </a>
                    <a href="https://www.linkedin.com/in/nicprkr/" target="_blank">
                        <img className="iconImg" src={linkedin}/>
                    </a>
                </div>
                <div className="text-center">
                <a href="http://nickinickidesign.com/" target="_blank">
                    <button className="btn text-center">PORTFOLIO</button>
                </a>
                </div>        
                <div className="info">
                <div className="info-header">TOP SKILLS</div>
                <div className="info-body">javascript, wordpress, logo design</div>
                <div className="info-header">DREAM JOB</div>
                <div className="info-body">developer at amazon</div>
                <div className="info-header">IDEAL WEEKEND</div>
                <div className="info-body">hiking, frisbee, reading</div>
                <div className="info-header">2018 GOAL</div>
                <div className="info-body">learn node.js</div>
                </div>    
                <div className="text-center">
                    <img className="iconImg" src={backFlip} onClick={()=>this.setState({ nicCard: false })}/>
                </div>
                </div>
          )
      }
      if (this.state.evCard === false){
          evCard = (
              
        <div className="card">
            <div className="card-header">bcit d3</div>
            <hr className="hr-pretty"/>
            <div className="card-name">evelyn cranston</div>
            <img className="mx-auto d-block" src={evelyn} style={photo} />
            <hr className="hr-pretty-yellow"/>
              
            <div className="card-desc">Front End Design 
              <div className="italics"> & bikes
              </div>
                  <button
                      className="btn text-center"
                      onClick={()=>this.setState({ evCard: true })}>ABOUT ME
                </button>
            </div>
            
        </div>
          )
      } else if (this.state.evCard === true){
          evCard = (
            <div className="card">
              <div className="card-header">evelyn cranston</div>
              <hr className="hr-pretty"/>
                <div className="icons">
                    <a href="https://github.com/evc-" target="_blank">
                        <img className="iconImg" src={github}/>
                    </a>
                    <a href="https://www.linkedin.com/in/evelyncr/" target="_blank">
                        <img className="iconImg" src={linkedin}/>
                    </a>
                </div>
                <div className="text-center">
                     <a href="http://evelyncranston.com/" target="_blank">
                    <button className="btn text-center">PORTFOLIO</button>
                </a>
                </div>
                <div className="info">
                <div className="info-header">TOP SKILLS</div>
                <div className="info-body">front end dev, visual design</div>
                <div className="info-header">DREAM JOB</div>
                <div className="info-body">slack UI designer</div>
                <div className="info-header">IDEAL WEEKEND</div>
                <div className="info-body">museum, coffee, dancing</div>
                <div className="info-header">2018 GOAL</div>
                <div className="info-body">work with a tech startup</div>
                </div>    
                <div className="text-center">
                    <img className="iconImg" src={backFlip} onClick={()=>this.setState({ evCard: false })}/>
                </div>
                </div>
          )
      }
    return (
<div className="container" style={container}>
        <div className="pageContainer">
            <div className="row">
                <div className="col-xs-12 col-sm-2 col-lg-4">
                    <div className="headerImg">
                        <img style={imgHeaderStyle} src={headerImg}/>
                    </div>
                </div>
                    <div className="col-xs-12 col-sm-5 col-lg-4">
                            {nicCard}
                    </div>
                    <div className="col-xs-12 col-sm-5 col-lg-4">
                            {evCard}
                    </div>
            </div>
        
            <div className="row">
                <div className="col-xs-12 col-sm-5 col-lg-4">
                            {chatCard}
                    </div>
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
    color: "#1D41A8"
}
const photo = {
    width: "150px",
    height: "150px"
}

const imgHeaderStyle={
    width: "100%",
    height: "100%"
}
