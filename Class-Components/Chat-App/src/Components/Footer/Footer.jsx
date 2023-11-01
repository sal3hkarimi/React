import { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.typeTextChat = this.typeTextChat.bind(this);
    this.submitTextMessage = this.submitTextMessage.bind(this);
  }
  state = {
    textChat: "",
  };

  typeTextChat(e) {
    this.setState({
      textChat: e.target.value,
    });
  }

  submitTextMessage(e) {
    e.preventDefault();
    this.setState({
      textChat: "",
    });
    this.props.sendTextChat(this.state.textChat);
  }

  render() {
    return (
      <div className="panel-footer">
        <form onSubmit={this.submitTextMessage}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Say something"
              value={this.state.textChat}
              onChange={this.typeTextChat}
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default Footer;
