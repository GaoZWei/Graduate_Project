import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <Menu.Item key="1">
            <Link to="/exercise"> 健身动作库</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/plan"> 健身计划</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/food"> 饮食查询</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/news"> 健康知识</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/implement"> 健身工具</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/personal"> 个人中心</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
export default Nav;
