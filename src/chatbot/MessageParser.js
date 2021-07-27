class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowerCase = message.toLowerCase();

    if (lowerCase.includes("hello")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
