import React, { Component } from "react";
import ActionItem from "./ActionItem";
import { Pagination } from "antd";
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
        <div style={{ marginTop: 180 }}>
          <Pagination defaultCurrent={3} total={500} />
        </div>
      </div>
    );
  }
}
export default Action;
