import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// import axios from "axios";
import { SocketContext, socket } from "./context/socket";
import Child from "./components/Child";
function App() {
  const [time, setTime] = useState("fetching");
  //
  // useEffect(() => {
  //   socket.on("connect", () => console.log(socket.id));
  //   socket.on("connect_error", () => {
  //     setTimeout(() => socket.connect(), 5000);
  //   });
  //
  //   socket.on("time", (data) => setTime(data));
  //   socket.on("disconnect", () => setTime("server disconnected"));
  // }, []);

  // const getTime = () => {
  //   console.log("hit");
  //   axios
  //     .get("http://localhost:8080/v1/global/test")
  //     .then((res) => {
  //       setTime(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("ERR", err);
  //     });
  // };

  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
        <Child userId={"userID-123"} />
      </SocketContext.Provider>
    </div>
  );
}

export default App;
