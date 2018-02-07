import React, { Component } from 'react';
import './App.css';
import mySocket from 'socket.io-client';
import sendIcon from './assets/send.png';

class Chat extends Component {
    constructor(props){
    super(props);
        this.state= {
            uName:'anonymous',
            allUsers:[],
            mode:0,
            allNames:[],
            allmsg:[],
            mymsg:""
        }
this.handleChange = this.handleChange.bind(this);
this.joinChat = this.joinChat.bind(this);
        this.handleMyMsg = this.handleMyMsg.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
    }
    componentDidMount(){
  //      this.socket = mySocket("http://localhost:10001");
    }
    handleChange(e){
        this.setState({
            uName:e.target.value
        });
    }
    handleMyMsg(evt){
        this.setState({
            mymsg:evt.target.value
        })
    }
    joinChat(){
        this.setState({
        mode:1
        })
    
        this.socket = mySocket("https://land-sockets.herokuapp.com/");
        this.socket.emit("uname", this.state.uName);
        this.socket.on("names", (data)=>{
            this.setState({
                allUsers:data
            })
        });
        
        this.socket.on("msgs", (data)=>{
            this.setState({
                allmsg:data
            })
        });
    }
    sendMsg(){
        var msg = this.state.uName+": "+this.state.mymsg;
        this.socket.emit("sendmsg", msg);
    }
    endChat(){
        this.props.noChat();
    }
    
  render() {
      var comp = null;
      
      if(this.state.mode===0){
      comp = (
        <div>
            <input className ="txtEntry" type="text" placeholder="Enter Name" onChange={this.handleChange}/>
          <button className="btn" onClick={this.joinChat}>Join Chat</button>
          </div>
      )
      } else if (this.state.mode === 1){
          comp = (
          <div id="chatBox">
              <div id="chatDisplay"></div>
              <div id="Controls">
              <input className ="txtEntry" type="text" placeholder="..." onChange={this.handleMyMsg} />
                    <img id="sendIcon" className="iconImg" src={sendIcon} onClick={this.sendMsg}/>
              </div>
              </div>
          );
      }
      var allNames = this.state.allUsers.map((obj, i)=>{
          return ( 
              <span key={i}>
                {obj}<span> - </span>
              </span>
              )
      });
      var allMsgs = this.state.allmsg.map((obj, i)=>{
          return ( 
              <div key={i}>
              {obj}
          </div>
              )
      });
    return (
      <div className="chatContainer">
        <div className="userBox">
            ALL USERS
            <div>{allNames}</div>
        </div>
        {allMsgs}
        {comp}
      </div>
    );
  }
}
export default Chat;
