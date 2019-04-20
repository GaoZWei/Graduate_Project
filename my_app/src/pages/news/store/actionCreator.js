import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";

const changehealthData = result => ({
  type: actionTypes.CHANGE_NEWS_DATA,
  newsList: result
});

export const changeHealthInfo = () => {
  return dispatch => {
    fetch("/health").then(res => {
      const result = res;
      dispatch(changehealthData(result));
    });
  };
};

const changeDetailData = result => ({
  type: actionTypes.CHANGE_NEWS_DETAIL,
  detailList: result
});
export const getHealthDetail = health_id => {
  return dispatch => {
    fetch("/health/" + health_id).then(res => {
      const result = res;
      console.log(res)
      dispatch(changeDetailData(result));
    });
  };
};