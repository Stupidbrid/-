import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <div>{"app" + new Date().getTime()}</div>
          <div>
            <Link to="/home">Go to home</Link>
          </div>
          <div>
            <Route path="/home" component={Home}></Route>
          </div>
        </Router>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       {/* <button
//         onClick={() => {
//           Browser.open({ url: "./dist" });
//         }}
//       >
//         Open sub page
//       </button> */}
//       <iframe
//         title="content"
//         src="./dist/index.html"
//         width="95%"
//         height="800px"
//         style={{ "background-color": "white" }}
//       ></iframe>
//     </div>
//   );
// }

export default App;
