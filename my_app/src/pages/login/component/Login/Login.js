import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { actionCreator } from "../../store";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import "../../style.css";
import { Input, Form, Layout, Button, Icon } from "antd";
const { Content } = Layout;
class LoginItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const { handleLogin } = this.props;
    return (
      <Layout>
        <Nav />
        <Content className="register_area">
          <div className="login_area_content">
            <div className="register_area_top">登录</div>
            <div className="login_area_content2">
              <Form className="login-form">
                <Form.Item>
                  {getFieldDecorator("user_account", {
                    rules: [{ required: true, message: "请输入你的用户名" }]
                  })(
                    <div className="login_area_formitem">
                      <div className="register_label">账号</div>
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="输入用户名"
                        className="register_input"
                      />
                    </div>
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("user_password", {
                    rules: [{ required: true, message: "请输入你的密码" }]
                  })(
                    <div className="login_area_formitem">
                      <div className="register_label">密码</div>
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="输入密码"
                        className="register_input"
                      />
                    </div>
                  )}
                </Form.Item>
                <Form.Item>
                  <div>
                    <div className="register_submit">
                      <Button
                        type="primary"
                        className="register_btn"
                        // htmlType="submit"
                        size="large"
                        onClick={() => handleLogin(this.props)}
                      >
                        登录
                      </Button>
                      <Button
                        type="primary"
                        className="register_btn"
                        size="large"
                      >
                        <Link to="/register">注册</Link>
                      </Button>
                    </div>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
        <Foot />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLogin(props, e) {
    if (e) e.preventDefault();
    const { form } = props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      //获取输入的值
      // const account = fieldsValue["account"];
      // const password = fieldsValue["password"];
      //获取查询条件
      const values = {
        ...fieldsValue
      };
      dispatch(actionCreator.Login(values, props));
    });
  }
});

const Login = Form.create()(LoginItem);
export default connect(
  null,
  mapDispatchToProps
)(withRouter(Login));
