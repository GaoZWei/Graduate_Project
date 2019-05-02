import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";
import { message } from "antd";
// 动作详情
const changeUserBasic = result => ({
  type: actionTypes.GET_USER_BASIC,
  userBasicList: result.basicMessage,
  userCommomPlanList: result.commonPlan,
  userPersonalPlanList: result.personalPlan,
  userFoodList: result.foodList
});
export const getUserBasicMessage = user_id => {
  return dispatch => {
    fetch("/users/" + user_id).then(res => {
      const result = res;
      result.commonPlan = utilPlan(result.commonPlan);
      result.personalPlan = utilPlan(result.personalPlan);
      result.foodList = utilPlan(result.foodList);
      dispatch(changeUserBasic(result));
    });
  };
};
// 给表格项加key
const utilPlan = obj => {
  for (var i = 0; i < obj.length; i++) {
    obj[i].key = i;
  }
  return obj;
};

export const deleteCommonPlan = (plan_id, user_id) => {
  return dispatch => {
    fetch("/users/delete/item?plan_id=" + plan_id + "&user_id=" + user_id).then(
      res => {
        if ((res = "ok")) {
          dispatch(getUserBasicMessage(user_id));
        } else {
          message.error("删除失败");
        }
      }
    );
  };
};
