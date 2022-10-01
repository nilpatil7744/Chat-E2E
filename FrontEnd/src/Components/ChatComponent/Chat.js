import React, {useState, useEffect, useRef} from "react";
import {io} from "socket.io-client";
import {to_Decrypt, to_Encrypt} from "../../crypto";
import "./chat.css";
const socket = io("http://localhost:8000");
function Chat({name, roomname}) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    debugger;
    socket.on("message", (data) => {
      const secret_key = sessionStorage.getItem("secret");
      const decrypt_key = to_Decrypt(secret_key);
      const ans = to_Decrypt(data.text, data.username, decrypt_key);

      console.log(ans);
      let temp = messages;
      temp.push({
        userId: data.userId,
        username: data.username,
        text: ans,
        encryptedText: data.text,
      });
      setMessages([...temp]);
    });
  }, [socket]);

  const sendData = () => {
    if (text !== "") {
      //encrypt here
      const secret_key = sessionStorage.getItem("secret");
      const decrypt_key = to_Decrypt(secret_key);
      const ans = to_Encrypt(text, decrypt_key);
      socket.emit("chat", ans);
      setText("");
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({behavior: "smooth"});
  };

  useEffect(scrollToBottom, [messages]);

  console.log(messages, "messages");
  useEffect(() => {
    if (name !== "" && roomname !== "") {
      console.log(socket, "oooop");
      socket.emit("new-user-joined", {username: name, roomname});
    }
  }, []);

  return (
    <>
      <div className="chat">
        <div className="user-name">
          <h2 style={{color: "red"}}>
            {name} <span style={{fontSize: "0.7rem"}}>in {roomname}</span>
          </h2>
        </div>
        <div className="chat-message">
          {messages?.map((i) => {
            if (i.name === name) {
              return (
                <div
                  className="message mess-left"
                  style={{
                    backgroundColor: "red",
                    marginTop: 2,
                  }}
                >
                  <p style={{color: "white"}}>{i.text}</p>
                  <span style={{color: "red"}}>{i.username}</span>
                </div>
              );
            } else {
              return (
                <div
                  className="message mess-right"
                  style={{
                    backgroundColor: "blue",
                    padding: 10,
                    marginTop: 2,
                  }}
                >
                  <p style={{color: "white"}}>{i.text} </p>
                  <span style={{color: "green"}}>{i.username}</span>
                </div>
              );
            }
          })}
          <div />
        </div>
        <div className="send">
          <input
            placeholder="enter your message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendData();
              }
            }}
            className="inputStyle"
          ></input>
          <button onClick={sendData} className="buttonStyle">
            Send
          </button>
        </div>
      </div>
      <div ref={messagesEndRef} />
    </>
  );
}
export default Chat;
