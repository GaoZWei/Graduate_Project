import React, { Component } from "react";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import { Layout } from "antd";
const { Content } = Layout;
class News extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content style={{ padding: "0 50px", marginTop: 64 ,height:450}}>
        这是新闻知识页面
        </Content>
        <Foot />
      </Layout>
    );
  }
}
export default News;

