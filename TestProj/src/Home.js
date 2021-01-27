import React, { Component } from "react";
import Child from "./Child";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
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
        <div>{"home" + new Date().getTime()}</div>
        <div>
          <Link to="/home/child">Go to child</Link>
        </div>
        <div>
          <Route path="/home/child" component={Child}></Route>
        </div>
      </div>
    );
  }
}

export default Home;
