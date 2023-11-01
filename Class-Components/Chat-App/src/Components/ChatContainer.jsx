import { Component } from "react";
import Footer from "./Footer";
import Body from "./Body";
import Heading from "./Heading";
import { messageGenerator } from "../services/messageGenerator";

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.users = {
      sender: {
        id: 1,
        name: "Saleh Karimi",
        avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
      },
      receiver: {
        id: 2,
        name: "Vahid Hosseini",
        avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
      },
    };

    this.sendTextChat = this.sendTextChat.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    chatList: [...messageGenerator(10)],
  };

  sendTextChat(message) {
    this.setState((state) => {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            type: "sender",
            textMessage: message,
            time: new Date().toLocaleTimeString(),
          },
        ],
      };
    });
  }

  handleScroll(e) {
    if (!e.target.scrollTop) {
      this.setState((state) => {
        return {
          ...state,
          chatList: [...messageGenerator(10), ...state.chatList],
        };
      });
      e.target.scrollTop = e.target.scrollHeight;
    }
  }

  render() {
    return (
      <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <Heading />
            <Body
              users={this.users}
              chatList={this.state.chatList}
              handleScroll={this.handleScroll}
            />
            <Footer sendTextChat={this.sendTextChat} />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatContainer;
