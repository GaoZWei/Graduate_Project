import React, { Component } from "react";
import ActionItem from "./ActionItem";
class ActionList extends Component {
  render() {
    return (
      <div style={{ marginTop: 15, marginLeft: -50 }}>
        <h1>全部动作</h1>
        <ActionItem />
      </div>
    );
  }
}
export default ActionList;
