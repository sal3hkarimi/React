import { Component } from "react";

class ChatMessageWrp extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div
        className={`chat ${this.props.type === "sender" ? "" : "chat-left"}`}
      >
        <div className="chat-avatar">
          <a
            className="avatar avatar-online"
            data-toggle="tooltip"
            href="#"
            data-placement={this.props.type === "sender" ? "right" : "left"}
            title=""
            data-original-title="June Lane"
          >
            <img src={this.props.avatar} alt="..." />
            <i></i>
          </a>
        </div>
        <div className="chat-body">
          <div className="chat-content">
            <p>{this.props.textMessage}</p>
            <time className="chat-time" dateTime="2015-07-01T11:37">
              {this.props.time}
            </time>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatMessageWrp;
