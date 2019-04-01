import React, { Component } from "react";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import "../../style.css";
import { Input, Layout, Button } from "antd";
const { Content } = Layout;
class Login extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content className="register_area">
          <div className="login_area_content">
            <div className="register_area_top">登录</div>
            <div className="login_area_content2">
              <div className="login_area_formitem">
                <div className="register_label">账号</div>
                <Input placeholder="输入用户名" className="register_input" />
              </div>
              <div className="login_area_formitem">
                <div className="register_label">密码</div>
                <Input
                  type="password"
                  placeholder="输入密码"
                  className="register_input"
                />
              </div>
              <div>
                <div className="register_submit">
                  <Button type="primary" className="register_btn" size="large">
                    登录
                  </Button>
                  <Button type="primary" className="register_btn" size="large">
                    注册
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Foot />
      </Layout>
    );
  }
}
export default Login;
