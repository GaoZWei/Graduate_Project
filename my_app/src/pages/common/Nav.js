import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { actionCreator as actionCreator1 } from "../../pages/login/store";
import { Layout, Menu, Popconfirm } from "antd";
import "./style.css";
const { Header } = Layout;
class Nav extends Component {
  render() {
    const { changeNavItem, userList, logout } = this.props;
    var recent_path1 = this.props.location.pathname;
    var selectValue1 = "";
    if (recent_path1.indexOf("/exercise") > -1) {
      selectValue1 = "1";
    } else if (recent_path1.indexOf("/plan") > -1) {
      selectValue1 = "2";
    } else if (recent_path1.indexOf("/food") > -1) {
      selectValue1 = "3";
    } else if (recent_path1.indexOf("/news") > -1) {
      selectValue1 = "4";
    } else if (recent_path1.indexOf("/implement") > -1) {
      selectValue1 = "5";
    } else if (recent_path1.indexOf("/personal") > -1) {
      selectValue1 = "6";
    }
    return (
      <Header className="navHead">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[selectValue1]}
          // selectedKeys={[selectValue]}
          style={{ lineHeight: "64px", backgroundColor: "rgb(32,32,34)" }}
        >
          {/* <div className="logo" style={{ display: "inline-block" }}>
            --------- Change健身系统 --------- &nbsp;
          </div> */}
          {/* ----- Change健身系统 ---- &nbsp; */}
          <Menu.Item key="1" onClick={() => changeNavItem("1")}>
            <Link to="/exercise"> 健身动作库</Link>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => changeNavItem("2")}>
            <Link to="/plan"> 训练计划</Link>
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
              <Link to="/login" className="loginRegister_font">
                登录
              </Link>
            </span>
            <span className="register">
              <Link to="/register" className="loginRegister_font">
                注册
              </Link>
            </span>
          </span>
        )}
      </Header>
    );
  }
  componentDidMount() {
    this.props.updateNav();
  }
}
const mapStateToProps = state => {
  return {
    selectValue: state.getIn(["header", "selectValue"]),
    userList: state.getIn(["main", "userList"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeNavItem(item) {
      dispatch(actionCreator.changeNavItem(item));
    },
    updateNav() {
      console.log(131231);
      // localStorage
      console.log(JSON.parse(sessionStorage.getItem("user")));
      // dispatch(actionCreator1.getUserData());
    },
    logout(_self) {
      sessionStorage.user = null;
      _self.props.history.push("/");
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Nav));
