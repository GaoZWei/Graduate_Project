import * as actionTypes from "./actionTypes";
import { fetch} from "../../../util/HttpUtil";

// 动作详情
const changeUserBasic= result => ({
  type: actionTypes.GET_USER_BASIC,
  userBasicList: result
});
export const getUserBasicMessage = user_id => {
  return dispatch => {
    fetch("/users/" + user_id).then(res => {
      const result = res;
      dispatch(changeUserBasic(result));
    });
  };
};

