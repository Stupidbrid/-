import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ChildLv2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>{"Childlv3: " + new Date().getTime()}</div>
      </div>
    );
  }
}

export default ChildLv2;
