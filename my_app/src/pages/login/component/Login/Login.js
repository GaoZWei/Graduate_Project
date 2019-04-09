import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { post } from "../../../../util/HttpUtil";
import { actionCreator } from "../../store";
import Nav from "../../../common/Nav";
import Foot from "../../../common/Foot";
import "../../style.css";
import { Input, Form, Layout, Button } from "antd";
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
              <Form
                className="login-form"
              >
                <Form.Item>
                  {getFieldDecorator("account", {
                    rules: [{ required: true, message: "请输入你的用户名" }]
                  })(
                    <div className="login_area_formitem">
                      <div className="register_label">账号</div>
                      <Input
                        placeholder="输入用户名"
                        className="register_input"
                      />
                    </div>
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("password", {
                    rules: [{ required: true, message: "请输入你的密码" }]
                  })(
                    <div className="login_area_formitem">
                      <div className="register_label">密码</div>
                      <Input
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
                        注册
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
// mapStateToProps=()=>{

// }
const mapDispatchToProps = dispatch => ({
  handleLogin(props, e) {
    // post("http://localhost:3005/users/login", {
    //   account: "123",
    //   password: "123"
    // }).then(response => {
    //   console.log(response);
    //   if (response === null || response === undefined) {
    //     alert("login failed");
    //   } else {
    //     props.history.push("/");
    //   }
    // });
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
        // lastOnlineTime:
        //   rangeValue && rangeValue.length > 1
        //     ? [
        //         rangeValue[0].format("YYYY-MM-DD"),
        //         rangeValue[1].format("YYYY-MM-DD")
        //       ]
        //     : null,
        // userQueryLike: userQueryLike ? userQueryLike.trim() : userQueryLike
      };
      console.log(values);
      dispatch(actionCreator.Login(values, props));
      // dispatch({
      //   type: "userManageModel/getUserList",
      //   payload: {
      //     values: values,
      //   }
      // });
    });
  }
});

const Login = Form.create()(LoginItem);
export default connect(
  null,
  mapDispatchToProps
)(withRouter(Login));

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
//     <Button type="primary" className="register_btn" size="large" onClick={handleLogin(this.props)}>
//       登录
//     </Button>
//     <Button type="primary" className="register_btn" size="large">
//       注册
//     </Button>
//   </div>
// </div>
// </div>
