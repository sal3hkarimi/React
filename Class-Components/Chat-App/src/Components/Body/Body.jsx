import { Component, createRef } from "react";
import ChatMessageWrp from "./ChatMessageWrp";

class Body extends Component {
  constructor(props) {
    super(props);
    this.chatBody = createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.chatList.height !== this.props.chatList.height) {
      return this.chatBody.current.scrollHeight;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (snapShot) {
      const chatBodyWrp = this.chatBody.current;
      chatBodyWrp.scrollTop = chatBodyWrp.scrollHeight - snapShot;
    }
  }

  componentDidMount() {
    this.chatBody.current.scrollTop = this.chatBody.current.scrollHeight;
  }

  render() {
    return (
      <div
        className="panel-body"
        ref={this.chatBody}
        onScroll={this.props.handleScroll}
      >
        <div className="chats">
          {this.props.chatList.map((chat, index) => (
            <ChatMessageWrp
              key={index}
              avatar={this.props.users[chat.type].avatar}
              textMessage={chat.textMessage}
              type={chat.type}
              time={chat.time}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Body;
