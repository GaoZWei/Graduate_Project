import * as actionTypes from "./actionTypes";
import { post } from "../../../util/HttpUtil";

const getUserData = result => ({
  type: actionTypes.GET_USER_DATA,
  userList: result
});
export const Login = (values, props) => {
  return dispatch => {
    post("http://localhost:3005/users/login", values).then(response => {
      const result = response;
      console.log(response);
      if (response === null || response === undefined) {
        alert("login failed");
      } else {
        dispatch(getUserData(result));
        // if (dispatch(getUserData(result))) {
        //   alert("login failed");
        //   props.history.push("/");
        // }
      }
    });
  };
};

export const Register = (values, props) => {
  return dispatch => {
    post("http://localhost:3005/users/register", values)
    .then(response => {
      const result = response;
      console.log(response);
      if (response === null || response === undefined) {
        alert("login failed");
      } else {
        alert('成功')
        // dispatch(getUserData(result));
        // if (dispatch(getUserData(result))) {
        //   alert("login failed");
        //   props.history.push("/");
        // }
      }
    });
  };
};
