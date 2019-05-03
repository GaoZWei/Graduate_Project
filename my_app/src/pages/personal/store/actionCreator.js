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
    switch (obj[i].plan_day) {
      case "1":
        obj[i].plan_day = "星期一";
        break;
      case "2":
        obj[i].plan_day = "星期二";
        break;
      case "3":
        obj[i].plan_day = "星期三";
        break;
      case "4":
        obj[i].plan_day = "星期四";
        break;
      case "5":
        obj[i].plan_day = "星期五";
        break;
      case "6":
        obj[i].plan_day = "星期六";
        break;
      case "7":
        obj[i].plan_day = "星期日";
        break;
      default:
        break;
    }
    obj[i].key = i;
    if (obj[i].plan_day != null && obj[i].group_exercise_id) {
      obj[i].group_id = obj[i].group_exercise_id.split(",");
      obj[i].group_name = obj[i].group_exercise_name.split(",");
      obj[i].group_group = obj[i].group_exercise_group.split(",");
      obj[i].group_times = obj[i].group_exercise_times.split(",");
    } else {
      obj[i].group_id = [];
      obj[i].group_name = [];
      obj[i].group_group = [];
      obj[i].group_times = [];
    }
  }
  return obj;
};
//删除公共计划
export const deleteCommonPlan = (plan_id, user_id) => {
  return dispatch => {
    fetch("/users/delete/item?plan_id=" + plan_id + "&user_id=" + user_id).then(
      res => {
        if ((res = "ok")) {
          dispatch(getUserBasicMessage(user_id));
          message.success("删除成功");
        } else {
          message.error("删除失败");
        }
      }
    );
  };
};
//删除食物清单
export const deleteFoodList = (food_id, user_id) => {
  return dispatch => {
    fetch(
      "/users/delete/item1?food_id=" + food_id + "&user_id=" + user_id
    ).then(res => {
      if ((res = "ok")) {
        dispatch(getUserBasicMessage(user_id));
        message.success("删除成功");
      } else {
        message.error("删除失败");
      }
    });
  };
};
//删除定制计划
export const deletePersonalPlan = (plan_id, exercise_id,user_id) => {
  return dispatch => {
    fetch(
      "/users/delete/item2?plan_id=" + plan_id + "&exercise_id=" + exercise_id
    ).then(res => {
      if ((res = "ok")) {
        dispatch(getUserBasicMessage(user_id));
        message.success("删除成功");
      } else {
        message.error("删除失败");
      }
    });
  };
};
