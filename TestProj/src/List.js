/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return isNaviToDetail;
  }

  render() {
    return (
      <div>
        <div className={this.state.showDetail ? "list-show" : "list-hide"}>
          <ExpenseList>
            <ExpenseListItem>
              {/*此处需要用代码设定全局状态currentItem 和 shouldComponentUpdate 之后再执行跳转 */}
              <Link to="/expenseList/detail">查看详细</Link>
            </ExpenseListItem>
          </ExpenseList>
        </div>
        <div>
          <Route path="/expenseList/detail" component={ExpenseDetail} />
        </div>
      </div>
    );
  }
}
