import "./App.css";
import io from "socket.io-client";

const socket = io.connect("/");

function App() {
  return (
    <div className="App">
      <h1>HIii</h1>
    </div>
  );
}

export default App;
