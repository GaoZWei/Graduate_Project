import React, { Component } from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;
class Nav extends Component {
  render() {
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
   
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          {/* <div className="logo" style={{ display: "inline-block" }}>
            ----- Change健身系统 ---- &nbsp;
          </div> */}
             {/* ----- Change健身系统 ---- &nbsp; */}
          <Menu.Item key="1">健身动作库</Menu.Item>
          <Menu.Item key="2">健身计划</Menu.Item>
          <Menu.Item key="3">饮食查询</Menu.Item>
          <Menu.Item key="4">健康知识</Menu.Item>
          <Menu.Item key="5">健身工具</Menu.Item>
          <Menu.Item key="6">个人中心</Menu.Item>
        </Menu>
      </Header>
    );
  }
}
export default Nav;
