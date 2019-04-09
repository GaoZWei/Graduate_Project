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
  // return dispatch => {
  //     fetch("/exercise").then(res => {
  //       const result = res;
  //       console.log(213123);
  //     //   dispatch(changehomeData(result));
  //     });
  //   };
};

//    post("http://localhost:3005/users/login", {
//       account: "123",
//       password: "123"
//     }).then(response => {
//       console.log(response);
//       if (response === null || response === undefined) {
//         alert("login failed");
//       } else {
//         props.history.push("/");
//       }
//     });
// }
