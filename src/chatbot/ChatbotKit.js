import React from "react";
import Chatbot from "react-chatbot-kit";
import useStyle from "./StyleSheet";
import ActionProvider from "./ActionProvider";
import config from "./Config";
import MessageParser from "./MessageParser";

function ChatbotKit() {
  const classes = useStyle();
  return (
    <div className={classes.body}>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}

export default ChatbotKit;
