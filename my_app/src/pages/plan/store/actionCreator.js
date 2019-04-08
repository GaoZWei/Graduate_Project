import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";

const changeplanData = result => ({
  type: actionTypes.CHANGE_PLAN_DATA,
  planlist: result
});
// 计划列表
export const changePlanData = () => {
  return dispatch => {
    fetch("/plan").then(res => {
      const result = res;
      dispatch(changeplanData(result));
    });
  };
};

const changeplanDetail = result => ({
  type: actionTypes.CHANGE_PLAN_DETAIL,
  planDetialList: result
});
// 计划详情
export const getPlanById = plan_id => {
  return dispatch => {
    fetch("/plan/" + plan_id).then(res => {
      const result = res;
      dispatch(changeplanDetail(result));
    });
  };
};
