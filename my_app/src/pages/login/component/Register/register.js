import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "../../store";
import { fetch } from "../../../../util/HttpUtil";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import "../../style.css";
import { Input, Form, Layout, Radio, Button, Icon } from "antd";
const RadioGroup = Radio.Group;
const { Content } = Layout;
class RegisterItem extends Component {
  validateAge = (rule, value, callback) => {
    if (value > 120 || value <= 0) {
      callback("请填写正确年龄");
    } else if (/^[0-9]*$/.test(value) === false && value !== null) {
      callback("请填写正确内容");
    }
    callback();
  };
  validateHeight = (rule, value, callback) => {
    if (value > 300 || value <= 0) {
      callback("请填写正确身高");
    } else if (/^[0-9]*$/.test(value) === false && value !== null) {
      callback("请填写正确内容");
    }
    callback();
  };

  validateWeight = (rule, value, callback) => {
    if (value > 300 || value <= 0) {
      callback("请填写正确体重");
    } else if (/^[0-9]*$/.test(value) === false && value !== null) {
      callback("请填写正确内容");
    }
    callback();
  };

  validateAccount = (rule, value, callback) => {
    if (value == null) {
      callback("请填写账号");
    } else if (this.checkUserAccount(value)) {
      callback("账号已存在");
      // if (response) {
      //   callback("账号已存在");
      // } else {
      //   callback();
      // }
    }

    // else {
    //   this.checkUserAccount(value).then(response => {
    //     console.log(response)
    //     if (response) {
    //       callback("账号已存在");
    //     } else {
    //       callback();
    //     }
    //   });
    // }
    callback();
  };
  checkUserAccount = value => {
    // return new Promise((resolve, reject) => {
    fetch(
      "http://localhost:3005/users/checkUserAccount?user_account=" + value
    ).then(response => {
      // console.log("check:" + response != 0);
      return response !== 0;
    });
    // });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { handleRegister } = this.props;
    return (
      <Layout>
        <Nav />
        <Content className="register_area">
          <div className="register_area_content">
            <div className="register_area_top">注册</div>
            <Form className="login-form">
              <Form.Item>
                {getFieldDecorator("user_account", {
                  rules: [
                    { required: true, message: "请输入你的用户名" },
                    {
                      validator: this.validateAccount
                    }
                  ],
                  validateTrigger: "onBlur"
                })(
                  <div className="register_area_formitem">
                    <div className="register_label">账号</div>
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="输入账号"
                      className="register_input"
                    />
                  </div>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("user_name", {
                  rules: [{ required: true, message: "请输入你的昵称" }]
                })(
                  <div className="register_area_formitem">
                    <div className="register_label">昵称</div>
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="输入昵称"
                      className="register_input"
                    />
                  </div>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("user_password", {
                  rules: [{ required: true, message: "请输入你的密码" }]
                })(
                  <div className="register_area_formitem">
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
                {getFieldDecorator("user_sex", {
                  rules: [{ required: true, message: "请选择你的性别" }]
                })(
                  <div className="register_area_formitem">
                    <div className="register_label"> 性别 </div>
                    <RadioGroup>
                      <Radio value="男">男</Radio>
                      <Radio value="女">女</Radio>
                    </RadioGroup>
                  </div>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("user_age", {
                  rules: [
                    { required: true, message: "请输入你的年龄" },
                    {
                      validator: this.validateAge
                    }
                  ]
                })(
                  <div className="register_area_formitem">
                    <div className="register_label">年龄</div>
                    <Input
                      prefix={
                        <Icon
                          type="exception"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="输入年龄"
                      className="register_input"
                    />
                  </div>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("user_height", {
                  rules: [
                    { required: true, message: "请输入你的身高" },
                    {
                      validator: this.validateHeight
                    }
                  ]
                })(
                  <div className="register_area_formitem">
                    <div className="register_label">身高(CM)</div>
                    <Input
                      prefix={
                        <Icon
                          type="exception"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="输入身高"
                      className="register_input"
                    />
                  </div>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("user_weight", {
                  rules: [
                    { required: true, message: "请输入你的体重" },
                    {
                      validator: this.validateWeight
                    }
                  ]
                })(
                  <div className="register_area_formitem">
                    <div className="register_label">体重(KG)</div>
                    <Input
                      prefix={
                        <Icon
                          type="exception"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="输入体重"
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
                      size="large"
                      onClick={() => handleRegister(this.props)}
                    >
                      注册
                    </Button>
                    <Button
                      type="primary"
                      className="register_btn"
                      size="large"
                    >
                      重置
                    </Button>
                  </div>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Foot />
      </Layout>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  handleRegister(props, e) {
    if (e) e.preventDefault();
    const { form } = props;
    console.log(props);
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      //获取输入的值
      // const account = fieldsValue["account"];
      // const password = fieldsValue["password"];
      //获取查询条件
      const values = {
        ...fieldsValue
      };
      // console.log(values);
      dispatch(actionCreator.Register(values, props));
    });
  }
});
const Register = Form.create()(RegisterItem);

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Register));
