import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  fetchUsers() {
    return fetch("api/users", { accpet: "application/json" }).then(res => {
      return res.json().then(json => {
        this.setState({ users: json });
      });
    });
  }
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <div className="logo" style={{ display: "inline-block" }}>
             ----- Change健身系统 ----   &nbsp;
            </div>
            <Menu.Item key="1">健身动作库</Menu.Item>
            <Menu.Item key="2">健身计划</Menu.Item>
            <Menu.Item key="3">饮食查询</Menu.Item>
            <Menu.Item key="4">健康知识</Menu.Item>
            <Menu.Item key="5">健身工具</Menu.Item>
            <Menu.Item key="6">个人中心</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
            {/* Content */}
            <div>健身知识库</div>
            <div>dasda</div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome</h1>
      //   </header>
      //   <Button type="primary">Button</Button>
      //   <p className="App-intro" onClick={this.fetchUsers.bind(this)}>
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   {this.state.users.map((user, index) => {
      //     return (<h1 key={index}>{user.name}</h1>)
      //   })}
      // </div>
    );
  }
}

export default App;
