import React, {useState} from "react";
import "./home.css";
import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {saveData} from "../../utils/LocalStorage";
import {encryptTextMessage, to_Encrypt} from "../../crypto";

const HomeScreen = (props) => {
  const navigate = useNavigate();
  let obj = {
    name: "",
    roomname: "",
    secret: "",
  };

  const [query, setQuery] = useState(obj);
  const {name, roomname, secret} = query;

  const handleJoin = (e) => {
    e.preventDefault();

    if (name !== "" && roomname !== "" && secret !== "") {
      sessionStorage.setItem("secret", to_Encrypt(secret));

      // saveData("secret", to_Encrypt(secret));

      navigate(`/chat/${name}/${roomname}`);
    } else {
      alert("username and roomname should be there");
    }

    console.log(query, "sssss");
  };
  function handleChange(e) {
    e.preventDefault();
    const {name, value} = e.target;

    setQuery({...query, [name]: value});
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        margin: "auto",
        borderRadius: 40,
        marginTop: "6%",
        width: "100%",
      }}
    >
      <Form>
        <div className="homepage">
          <h1 style={{color: "white"}}>Welcome to ChatRoom</h1>

          <TextField
            style={{
              background: "white",
              color: "white",
            }}
            variant="outlined"
            placeholder="Enter your username"
            name="name"
            value={query.name}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            style={{
              background: "white",
              color: "white",
            }}
            placeholder="Enter Room Name"
            variant="outlined"
            name="roomname"
            value={query.roomname}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            style={{
              background: "white",
              color: "white",
            }}
            placeholder="Enter your Secret Password"
            variant="outlined"
            name="secret"
            value={query.secret}
            onChange={(e) => handleChange(e)}
          />

          <Button
            onClick={handleJoin}
            style={{
              background: "red",
              color: "white",
            }}
          >
            Join
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default HomeScreen;
