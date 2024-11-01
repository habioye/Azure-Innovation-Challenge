import azurelogo from "../../assets/chatbot.png";
// import {ReactSVG} from "react-svg";
import stats from "../../assets/svg/stat.svg";
import stat from "../../assets/stat.png";
import "./App.css";
import { useState } from "react";
// import addbotton from './assets/add.png';

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
    xhr.open('GET', 'https://api.example.com/data');
    xhr.onload = function() {
      if (xhr.status === 200) {
        // setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }

  // request.send();
  // console.log()



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
            <img className="chatImg" src="" alt="" />{" "}
            <p className="txt"> Lorem ipsum</p>
          </div>
          <div className="chat">
            <img className="chatImg" src="" alt="" />{" "}
            <p className="txt"> Lorem ipsum</p>
          </div>
          {messages.map((message, i) => {
            <div className="chat">
              <img className="chatImg" src="" alt="" />{" "}
              <p className="txt"> Lorem ipsum</p>
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
