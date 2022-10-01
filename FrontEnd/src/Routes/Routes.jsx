import React from "react";
import {Route, Routes} from "react-router";
import HomeScreen from "../Components/HomeScreen";
import ChatScreen from "../Components/Screen";

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
