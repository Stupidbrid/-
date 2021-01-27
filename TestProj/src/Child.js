import React, { Component } from "react";
import ChildLv2 from "./ChildLv2";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <div>
        <div>{"Child: " + new Date().getTime()}</div>
        <div>
          <Link to="/home/child/childlv2">Go to childlv2</Link>
        </div>
        <div>
          <Route path="/home/child/childlv2" component={ChildLv2}></Route>
        </div>
      </div>
    );
  }
}

export default Child;
