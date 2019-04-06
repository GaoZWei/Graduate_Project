import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import "../../style.css";
import { Input, Form, Layout, Button, Icon } from "antd";
import { post } from "../../../../util/HttpUtil";
// import { withRouter, Link } from "react-router";
import { withRouter } from "react-router-dom";
const { Content } = Layout;
class LoginItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    // const { handleLogin } = this.props;
    function handleLogin(props) {
      alert(1);
      post("http://localhost:3005/users/login", {
        account: "123",
        password: "123"
      }).then(response => {
        console.log(response);
        if (response === null || response === undefined) {
          alert("login failed");
        } else {
          // props.history.push("/");
        }
      });
    }
    return (
      <Layout>
        <Nav />
        <Content className="register_area">
          <div className="login_area_content">
            <div className="register_area_top">登录</div>
            <Form className="login-form">
              <Form.Item>
                {getFieldDecorator("userName", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {/* <a className="login-form-forgot" href="">
                  Forgot password
                </a> */}
                <Button
                  type="primary"
                  htmlType="button"
                  onClick={handleLogin(this.props)}
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or <a href="/login">register now!</a>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Foot />
      </Layout>
    );
  }
}
// mapStateToProps=()=>{

// }
const mapDispatchToProps = dispatch => ({});

const Login = Form.create()(LoginItem);
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);

// <div className="login_area_content2">
// <div className="login_area_formitem">
//   <div className="register_label">账号</div>
//   <Input placeholder="输入用户名" className="register_input" />
// </div>
// <div className="login_area_formitem">
//   <div className="register_label">密码</div>
//   <Input
//     type="password"
//     placeholder="输入密码"
//     className="register_input"
//   />
// </div>
// <div>
//   <div className="register_submit">
//     <Button type="primary" className="register_btn" size="large">
//       登录
//     </Button>
//     <Button type="primary" className="register_btn" size="large">
//       注册
//     </Button>
//   </div>
// </div>
// </div>
