// import axios from "axios";
import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";
// import { fromJS } from "immutable";

const changehomeData = result => ({
  type: actionTypes.CHANGE_EXERCISE_DATA,
  exerciseList: result
});

export const changeHomeInfo = () => {
  return dispatch => {
    fetch("/exercise").then(res => {
      const result = res;
      dispatch(changehomeData(result));
    });
  };
};

const changeDetailData = result => ({
  type: actionTypes.CHANGE_DETAIL_DATA,
  detailList: result
});
export const getExerciseDetail = exercise_id => {
  return dispatch => {
    // axios.get
    fetch("/exercise/" + exercise_id).then(res => {
      const result = res;
      dispatch(changeDetailData(result));
    });
  };
};

// 搜索动作
const getSearchData = result => ({
  type: actionTypes.GET_SEARCH_DATA,
  exerciseList: result
});
export const getSearchExercise = exercise_name=> {
  return dispatch => {
    // axios.get
    fetch("/exercise/search?exercise_name=" + encodeURI(exercise_name)).then(res => {
      const result = res;
      dispatch(getSearchData(result));
    });
  };
};

