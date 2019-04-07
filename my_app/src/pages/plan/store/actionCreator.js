import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";

const changeplanData = result => ({
  type: actionTypes.CHANGE_PLAN_DATA,
  planList: result
});

export const changePlanData = () => {
  return dispatch => {
    fetch("/plan").then(res => {
      const result = res;
      dispatch(changeplanData(result));
    });
  };
};
