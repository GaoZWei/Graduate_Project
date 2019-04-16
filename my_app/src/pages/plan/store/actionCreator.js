import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";

// 计划列表
const changeplanData = result => ({
  type: actionTypes.CHANGE_PLAN_DATA,
  planlist: result
});
export const changePlanData = () => {
  return dispatch => {
    fetch("/plan").then(res => {
      const result = res;
      dispatch(changeplanData(result));
    });
  };
};

// 计划详情
const changeplanDetail = result => ({
  type: actionTypes.CHANGE_PLAN_DETAIL,
  planDetialList: result
});
export const getPlanById = plan_id => {
  return dispatch => {
    fetch("/plan/" + plan_id).then(res => {
      const result = res;
      dispatch(changeplanDetail(result));
    });
  };
};

// 搜索计划
const getSearchData = result => ({
  type: actionTypes.GET_SEARCH_DATA,
  planlist: result
});
export const getSearchPlan = plan_name => {
  return dispatch => {
    fetch("/plan/search?plan_name=" + encodeURI(plan_name)).then(res => {
      const result = res;
      dispatch(getSearchData(result));
    });
  };
};

//筛选得出需要计划
const getfilterData = result => ({
  type: actionTypes.FILTER_PLAN,
  planlist: result
});
export const sendRequestToUpdate = (sort_id, day_id, implement_id, body_id) => {
  return dispatch => {
    fetch(
      "/plan/filter/item?plan_aim=" +
        sort_id +
        "&plan_day=" +
        day_id +
        "&plan_implement=" +
        implement_id +
        "&plan_body=" +
        body_id
    ).then(res => {
      const result = res;
      dispatch(getfilterData(result));
    });
  };
};
