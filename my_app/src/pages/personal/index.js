import React, { Component } from "react";
import Nav from "../common/Nav";
import Foot from "../common/Foot";
import { Layout } from "antd";
const { Content } = Layout;
class Personal extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content style={{ padding: "0 50px", marginTop: 64 ,height:450}}>
        这是个人中心主页
        </Content>
        <Foot />
      </Layout>
    );
  }
}
export default Personal;
