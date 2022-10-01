import React from "react";
import {Route, Routes} from "react-router";
import ChatScreen from "../Components/ChatComponent";
import HomeScreen from "../Components/HomeScreen";

function Routess(props) {
  return (
    <div>
      <Routes>
        <Route index element={<HomeScreen {...props} />} />

        <Route path="chat/:name/:roomname" element={<ChatScreen />} />
      </Routes>
    </div>
  );
}

export {Routess};
