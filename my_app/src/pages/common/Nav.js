import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { Layout, Menu } from "antd";
const { Header } = Layout;
class Nav extends Component {
  render() {
    const { selectValue, changeNavItem } = this.props;
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["1"]}
          selectedKeys={[selectValue]}
          style={{ lineHeight: "64px" }}
        >
          {/* <div className="logo" style={{ display: "inline-block" }}>
            ----- Change健身系统 ---- &nbsp;
          </div> */}
          {/* ----- Change健身系统 ---- &nbsp; */}
          <Menu.Item key="1" onClick={() => changeNavItem("1")}>
            <Link to="/exercise"> 健身动作库</Link>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => changeNavItem("2")}>
            <Link to="/plan"> 健身计划</Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={() => changeNavItem("3")}>
            <Link to="/food"> 饮食查询</Link>
          </Menu.Item>
          <Menu.Item key="4" onClick={() => changeNavItem("4")}>
            <Link to="/news"> 健康知识</Link>
          </Menu.Item>
          <Menu.Item key="5" onClick={() => changeNavItem("5")}>
            <Link to="/implement"> 健身工具</Link>
          </Menu.Item>
          <Menu.Item key="6" onClick={() => changeNavItem("6")}>
            <Link to="/personal"> 个人中心</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectValue: state.getIn(["header", "selectValue"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeNavItem(item) {
      dispatch(actionCreator.changeNavItem(item));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
