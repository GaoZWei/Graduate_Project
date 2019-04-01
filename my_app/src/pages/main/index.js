import React, { Component } from "react";
import Foot from "../common/Foot";
import MainTop from "./component/MainTop/MainTop";
import "./style.css";
import { Layout } from "antd";
class News extends Component {
  render() {
    return (
      <Layout>
        <MainTop />
        <Foot />
      </Layout>
    );
  }
}
export default News;
