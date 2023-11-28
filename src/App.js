import './App.css';
import React, { useState } from 'react';
import gptLogo from './assets/chatgpt.svg'; // Use a relative path without the leading slash
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import Saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImg from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';


function App() {
  const [input, setInput]= useState("");

const handlesend = async () =>{
  const res = await sendMsgToOpenAI(input);
  console.log(res)
}



  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperside">
          <div className="uppersidetop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midbutton">
            <img src={addBtn} alt="New Chat" className="addBtn" />
            New Chat
          </button>
          <div className="uppersidebottom">
            <button className="query">
              <img src={msgIcon} alt="Query" className="addbtn" />
              What is Programming
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" className="addbtn" />
              How to use API
            </button>
          </div>
        </div>
        <div className="lowerside">
          <div className="listitems"><img src={home} alt="Home" className="listitemsImg" />Home</div>
          <div className="listitems"><img src={Saved} alt="Saved" className="listitemsImg" />Saved</div>
          <div className="listitems"><img src={rocket} alt="Upgrade" className="listitemsImg" />Upgrade to pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className='chatimg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis dapibus sem, in efficitur neque ultricies vel. Quisque eget eros velit. Fusce sed bibendum dolor. Nulla facilisi. Vestibulum ac dui quis erat fringilla mattis. Suspendisse potenti. Sed id condimentum velit. Vivamus in feugiat odio. In hac habitasse platea dictumst. Praesent non luctus leo. Nulla facilisi. Integer non purus a metus hendrerit sollicitudin.</p>
          </div>
          <div className="chat bot">
            <img className='chatimg' src={gptImg} alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis dapibus sem, in efficitur neque ultricies vel. Quisque eget eros velit. Fusce sed bibendum dolor. Nulla facilisi. Vestibulum ac dui quis erat fringilla mattis. Suspendisse potenti. Sed id condimentum velit. Vivamus in feugiat odio. In hac habitasse platea dictumst. Praesent non luctus leo. Nulla facilisi. Integer non purus a metus hendrerit sollicitudin.</p>
          </div>
        </div>
        <div className="chatfotter">
          <div className="inp">
            <input type="text" placeholder= "Send a message" value={input} onChange={(e)=>{setInput(e.target.value)}} /> {/* Added quotes around placeholder */}
            <button className="send" onClick={{handlesend}}><img src={sendBtn} alt="Send" /></button> {/* Closed the button tag */}
          </div>
          <p>Copyright © 2023 Aman. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
