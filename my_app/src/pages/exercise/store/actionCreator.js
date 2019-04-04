import axios from "axios";
import * as actionTypes from "./actionTypes";
// import { fromJS } from "immutable";

const changehomeData = result => ({
  type: actionTypes.CHANGE_EXERCISE_DATA,
  exerciseList: result
});

export const changeHomeInfo = () => {
  return dispatch => {
    axios.get("/exercise").then(res => {
      const result = res.data;
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
    axios.get("/exercise/" + exercise_id).then(res => {
      const result = res.data;
      dispatch(changeDetailData(result));
    });
  };
};
