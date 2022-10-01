import React from "react";
import {useParams} from "react-router-dom";
import {io} from "socket.io-client";
import Chat from "../ChatComponent/Chat";
import "../ChatComponent/chat.css";

const socket = io("http://localhost:8000");
const ChatScreen = (props) => {
  const {name, roomname} = useParams();

  console.log(name, roomname, "useparam");
  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        margin: "auto",
        display: "flex",
      }}
    >
      <Chat name={name} roomname={roomname} socket={socket} />
    </div>
  );
};

export default ChatScreen;
