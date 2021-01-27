import React, { Component } from "react";
import ChildLv3 from "./ChildLv3";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ChildLv2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    return (
      <div>
        <div>{"Childlv2: " + new Date().getTime()}</div>
        <div>
          <Link to="/home/child/childlv2/childlv3">Go to childlv3</Link>
        </div>
        <div>
          <Route
            path="/home/child/childlv2/childlv3"
            component={ChildLv3}
          ></Route>
        </div>
      </div>
    );
  }
}

export default ChildLv2;
