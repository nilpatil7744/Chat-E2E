import React from "react";
import {useParams} from "react-router-dom";
import Chat from "./Chat";
import "./chat.css";

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
      <Chat name={name} roomname={roomname} />
    </div>
  );
};

export default ChatScreen;
