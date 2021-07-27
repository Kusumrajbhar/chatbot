import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import useStyle from "./Stylesheet";

function SendMessage() {
  const senderMsg = [
    "Hii",
    "How are You?",
    "I am also fine",
    "okay",
    "How was your day",
    "get lost",
  ];

  const value = senderMsg[Math.floor(Math.random() * senderMsg.length)];
  console.log("value", value);

  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [reply, setReply] = useState([]);

  const classes = useStyle();

  const displayMessage = () => {
    setAllMessages((oldMsg) => [...oldMsg, message]);
    setMessage("");
    setReply((replyMsg) => [...replyMsg, value]);
  };

  //console.log(allMessages);
  return (
    <div className={classes.body}>
      <Typography className={classes.textFields}>
        <Typography className={classes.bot}>
          {reply &&
            reply.map((replies, index) => (
              <p key={index}>
                {replies} {allMessages[index + 1]?.msg}
              </p>
            ))}
        </Typography>
      </Typography>
      <br />

      {/* {allMessages &&
        allMessages.map((msg, index) => (
          <Typography className={classes.me}>
            {" "}
            <p key={index}>{msg}</p>{" "}
          </Typography>
        ))} */}

      <br />
      <Typography className={classes.text}>
        <TextField
          variant="outlined"
          multiline
          className={classes.input}
          type="text"
          placeholder="type..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          disabled={!message}
          onClick={displayMessage}
          variant="contained"
          color="primary"
        >
          <SendIcon />
        </Button>
      </Typography>
    </div>
  );
}

export default SendMessage;
