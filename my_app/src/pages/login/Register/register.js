import React, { Component } from "react";
import Nav from "../../common/Nav";
import Foot from "../../common/Foot";
import "../style.css";
import { Input, Layout, Select, Radio } from "antd";

const RadioGroup = Radio.Group;
const { Content } = Layout;
class Register extends Component {
  render() {
    return (
      <Layout>
        <Nav />
        <Content className="register_area">
          <div className="register_area_content">
            <div className="register_area_top">注册</div>
            {/* <div className="register_area_formitem">
              登录注册
              <br />
              <Input placeholder="Basic usage" className="register_input" />
            </div> */}
            <div className="register_area_formitem">
              <div className="register_label">用户名</div>
              <Input placeholder="Basic usage" className="register_input" />
            </div>
            <div className="register_area_formitem">
              <div className="register_label">密码</div>
              <Input
                type="password"
                placeholder="input password"
                className="register_input"
              />
            </div>
            <div className="register_area_formitem">
              <div className="register_label" /> 性别 <br />
              <RadioGroup>
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </RadioGroup>
            </div>
            <div className="register_area_formitem">
              <div className="register_label">年龄</div>
              <Input placeholder="Basic usage" className="register_input" />
            </div>
            <div className="register_area_formitem">
              <div className="register_label">身高</div>
              <Input placeholder="Basic usage" className="register_input" />
            </div>
            <div className="register_area_formitem">
              <div className="register_label">体重</div>
              <Input placeholder="Basic usage" className="register_input" />
            </div>
          </div>
        </Content>
        <Foot />
      </Layout>
    );
  }
}
export default Register;
