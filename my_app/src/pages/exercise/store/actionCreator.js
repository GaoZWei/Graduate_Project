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
export const getSearchExercise = exercise_name => {
  return dispatch => {
    // axios.get
    fetch("/exercise/search?exercise_name=" + encodeURI(exercise_name)).then(
      res => {
        const result = res;
        dispatch(getSearchData(result));
      }
    );
  };
};

//筛选得出需要动作
// const getfilterData = result => ({
//   type: actionTypes.CHANGE_PLANBODY,
//   planBodyList: result
// });
export const sendRequestToUpdate = (
  exercise_implement_id,
  sort_id,
  difficult_id
) => {
  console.log(exercise_implement_id, sort_id, difficult_id);
  return dispatch => {
    fetch(
      "/exercise/filter/item?exercise_sort_facility=" +
        exercise_implement_id +
        "&exercise_sort=" +
        sort_id +
        "&exercise_difficulty=" +
        difficult_id
    ).then(res => {
      const result = res;
      console.log(res);
      // dispatch(changeplanbody(result));
    });
  };
};
