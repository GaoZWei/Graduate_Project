import React, { Component } from "react";
import Foot from "../common/Foot";
import MainTop from "./component/MainTop/MainTop";
import MainMiddle from "./component/MainMiddle/MainMiddle";
import MainBottom from "./component/MainBottom/MainBottom";
import MainBottomSecond from "./component/MainBottomSecond/MainBottomSecond";
import "./style.css";
import { Layout } from "antd";

class Main extends Component {
  render() {
    return (
      <Layout>
        <MainTop />
        <MainMiddle />
        <hr style={{ width: "90%", color: "gray", opacity: "0.2" }} />
        <MainBottom />
        <MainBottomSecond />
        <Foot />
      </Layout>
    );
  }
}
export default Main;
