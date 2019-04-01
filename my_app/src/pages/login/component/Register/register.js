import React, { Component } from "react";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import "../../style.css";
import { Input, Layout, Radio, Button } from "antd";

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
            <div className="register_area_formitem">
              <div className="register_label">账号</div>
              <Input placeholder="输入账号" className="register_input" />
            </div>
            <div className="register_area_formitem">
              <div className="register_label">昵称</div>
              <Input placeholder="输入昵称" className="register_input" />
            </div>
            <div className="register_area_formitem">
              <div className="register_label">密码</div>
              <Input
                type="password"
                placeholder="输入密码"
                className="register_input"
              />
            </div>
            <div className="register_area_formitem">
              <div className="register_label"> 性别 </div>
              <RadioGroup>
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </RadioGroup>
            </div>
            <div className="register_area_formitem">
              <div className="register_label">年龄</div>
              <Input placeholder="输入年龄" className="register_input" />
            </div>
            <div className="register_area_formitem">
              <div className="register_label">身高(KG)</div>
              <Input placeholder="输入身高" className="register_input" />
            </div>
            <div className="register_area_formitem">
              <div className="register_label">体重(CM)</div>
              <Input placeholder="输入体重" className="register_input" />
            </div>
            <div>
              <div className="register_submit">
                <Button type="primary" className="register_btn" size="large">
                  注册
                </Button>
                <Button type="primary" className="register_btn" size="large">
                  重置
                </Button>
              </div>
            </div>
          </div>
        </Content>
        <Foot />
      </Layout>
    );
  }
}
export default Register;
