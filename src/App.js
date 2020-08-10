import React, { useState, useEffect } from "react";

import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

import "./App.css";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ username: "Aman", text: "NOICE!!" }]);
  const [username, setUsername] = useState("");

  // console.log(input);
  // console.log(messages);

  useEffect(() => {
    setUsername(prompt("Please enter your name..."));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Facebook Messenger Clone</h1>
      <h3>Welcome {username}</h3>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message message={message} username={username} key={Math.random()}/>
      ))}
    </div>
  );
}

export default App;
