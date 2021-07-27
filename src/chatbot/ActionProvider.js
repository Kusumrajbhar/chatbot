class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  greet = () => {
    const message = this.createChatBotMessage("Hello friend");
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((preState) => ({
      ...preState,
      messages: [...preState.messages, message],
    }));
  };
}

export default ActionProvider;
