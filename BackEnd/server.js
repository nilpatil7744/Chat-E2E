const express = require("express");
const cors = require("cors");
const socket = require("socket.io");
const app = express();
const {onBoard, getCurrentUser, userDisconnect} = require("./chat");

app.use(cors());

var server = app.listen(2244, () => {
  console.log("listening on Port 2244");
});

const io = socket(server);

io.on("connection", (socket) => {
  socket.on("userjoiningRoom", ({username, roomname}) => {
    const newUser = onBoard(socket.id, username, roomname);
    socket.join(newUser.room);
  });
});
