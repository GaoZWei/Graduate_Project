import React, { Component } from "react";
import ActionItem from "./ActionItem";
// import { Card} from "antd";
// const { Meta } = Card;
class Action extends Component {
  render() {
    return (
      <div style={{ marginTop: 15 }}>
        <h1>全部动作</h1>
        <ActionItem />
        <div style={{ marginTop: 155 }}>
          <ActionItem />
        </div>
      </div>
    );
  }
}
export default Action;
