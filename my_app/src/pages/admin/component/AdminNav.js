import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu, Popconfirm } from "antd";
import "../style.css";
const { Header } = Layout;
class AdminNav extends Component {
  render() {
    const { logout } = this.props;
    var recent_path1 = this.props.location.pathname;
    var selectValue1 = "";
    if (recent_path1.indexOf("/exercise") > -1) {
      selectValue1 = "1";
    } else if (recent_path1.indexOf("/plan") > -1) {
      selectValue1 = "2";
    } else if (recent_path1.indexOf("/food") > -1) {
      selectValue1 = "3";
    } else if (recent_path1.indexOf("/health") > -1) {
      selectValue1 = "4";
    } else if (recent_path1.indexOf("/implement") > -1) {
      selectValue1 = "5";
    } else {
      selectValue1 = "1";
    }
    return (
      <Header className="navHead">
        <div className="logo">
          <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
            Change健身后台管理系统
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[selectValue1]}
          style={{
            lineHeight: "64px",
            backgroundColor: "rgb(32,32,34)",
            marginLeft: "22%"
          }}
        >
          <Menu.Item key="1">
            <Link to="/admin/exercise"> 健身动作信息</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/plan"> 训练计划信息</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/admin/food"> 饮食信息</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/admin/health"> 健康知识信息</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/admin/implement"> 健身工具信息</Link>
          </Menu.Item>
        </Menu>
        {sessionStorage.getItem("user") !== null &&
        sessionStorage.getItem("user") !== undefined &&
        sessionStorage.getItem("user") !== "null" ? (
          <span>
            <span className="login">
              {JSON.parse(sessionStorage.getItem("user")).user_name}
            </span>
            <span className="logout">
              <Popconfirm title="确认退出登录?" onConfirm={() => logout(this)}>
                退出登录
              </Popconfirm>
            </span>
          </span>
        ) : (
          <span>
            <span className="login">
              <Link to="/" className="loginRegister_font">
                退出登录
              </Link>
            </span>
          </span>
        )}
      </Header>
    );
  }
}
const mapStateToProps = state => {
  return {
    // selectValue: state.getIn(["header", "selectValue"]),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // changeNavItem(item) {
    //   dispatch(actionCreator.changeNavItem(item));
    // }
    logout(_self) {
      sessionStorage.user = null;
      _self.props.history.push("/");
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminNav));
