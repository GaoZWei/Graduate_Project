import React, { Component } from "react";
import { Layout } from "antd";
const { Footer } = Layout;
class Foot extends Component {
  render() {
    return (
        <Footer style={{ textAlign: "center" }}>
        ©2018-2019 Created by GaoZhengwei 
      </Footer>
    );
  }
}
export default Foot;
