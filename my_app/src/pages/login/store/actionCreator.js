import * as actionTypes from "./actionTypes";
import { post } from "../../../util/HttpUtil";
import { message } from "antd";

const getUserData = result => ({
  type: actionTypes.GET_USER_DATA,
  userList: result
});
export const Login = (values, props) => {
  return dispatch => {
    post("http://localhost:3005/users/login", values).then(response => {
      const result = response;
      // console.log(response);
      if (response === null || response === undefined || response === false) {
        message.error("登录失败,请重新登录");
        // props.match.path=(props.match.path);
      } else {
        //直接操作sessionStorage
        sessionStorage.user = JSON.stringify(result);
        dispatch(getUserData(result));
        message.success("登录成功");
        props.history.push("/");
      }
    });
  };
};

export const Register = (values, props) => {
  return dispatch => {
    post("http://localhost:3005/users/register", values).then(response => {
      if (!response) {
        alert("注册失败,请重试");
      } else {
        message.success("注册成功");
        props.history.push("/login");
      }
    });
  };
};
