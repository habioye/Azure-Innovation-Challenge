import azurelogo from "../../assets/chatbot.png";
import chatbot from "../../assets/chatbot.png";
import user from "../../assets/user.jpg";
// import {ReactSVG} from "react-svg";
import stats from "../../assets/svg/stat.svg";
import stat from "../../assets/stat.png";

import "./App.css";
import React, { useState, useEffect } from "react";
import addbotton from './assets/add.png';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am azure and I am ready for your requesponse",
      isBot: true,
    },
  ]);

  const handleSend = async () => {
    // const res = await sendMsgToAzure(input);
    const res = null;
    // console.log(res);
    setMessages([
      ...messages,
      {
        text: input,
        isBot: false,
      },
      {
        text: res,
        isBot: true,
      },
    ]);
  };
  // let url = "https://api.github.com/users/mralexgray/repos";
  // let request = new XMLHttpRequest();
  // request.open('GET',url);
  // request.onload = function() {
  //   if (request.status === 200) {
  //     SVGMetadataElement(JSON.parse(request.responseText));
  //     console.log("There is an issue");
  //   } else {
  //     console.log("works");
  //   }
  // }
  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/mralexgray/repos');
    xhr.onload = function() {
      if (xhr.status === 200) {
        // setData(JSON.parse(xhr.responseText));
        console.log("got one");
        console.log(xhr.responseText,"the other");

      } else {
        console.log("got the other");
      }
    };
    xhr.send();
    xhr.onload();
    console.log("it happened");
    console.log(xhr.responseText,"the other");
  }

  handleClick();



  return (
    <div className="App">
      {/* <div>
        <stat />
      </div> */}
       <div>
      <button onClick={handleClick}>Get Data</button>
      {/* {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>} */}
    </div>

      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={azurelogo} alt="" className="logo" />
            <span className="brand"></span>
            azure ai
            <button className="rounded-full midbtn">
              <img src="" alt="" className=" addBtn" />
              New Query
            </button>
            <button className="query">
              {" "}
              <img alt="" /> what is programming ?
            </button>
            <button className="query">
              {" "}
              <img alt="" /> what is programming ?
            </button>
          </div>
        </div>
        <div className="sidebottom">
          <div className="listitems">
            <img className="statlogo" width="40px" alt="" src={stat} />
          </div>
          <div className="listitems">Profile</div>
          <div className="listitems">managerId</div>
          <div className="listitems">Goingtosleep</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg-aibot" src={chatbot} alt="" />{" "}
            <p className="txt"> Hello I am Azure AI and I will give you useful information about the data source.</p>
          </div>
          <div className="chat">
            <img className="chatImg-user" src={user} alt="" />{" "}
            <p className="txt"> Hello azure ai what is the country with the highest temperature. </p>
          </div>
          {messages.map((message, i) => {
            
            <div className="chat">
              <img className="chatImg" src={message.isBot?chatbot:user} alt="" />{" "}
              <p className="txt"> {message.text}</p>
            </div>;
          })}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              name=""
              id=""
              placeholder="send a message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />{" "}
            <button className="send" onClick={handleSend}>
              <img src="" alt="Send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
