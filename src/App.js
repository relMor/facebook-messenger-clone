import React, { useState, useEffect } from "react";

import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import firebase from "firebase";

import "./App.css";
import Message from "./Message";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // console.log(input);
  // console.log(messages);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc~")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name..."));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
        <Message message={message} username={username} key={Math.random()} />
      ))}
    </div>
  );
}

export default App;
