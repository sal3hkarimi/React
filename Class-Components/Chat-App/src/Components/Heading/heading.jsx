import { Component } from "react";

class Heading extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <div className="panel-heading">
        <h3 className="panel-title">
          <i className="icon wb-chat-text" aria-hidden="true"></i> Chat
        </h3>
      </div> );
    }
}
 
export default Heading;