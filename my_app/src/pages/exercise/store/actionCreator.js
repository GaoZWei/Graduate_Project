import * as actionTypes from "./actionTypes";
import { fetch, post } from "../../../util/HttpUtil";
import { message } from "antd";
// 动作列表
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
// 动作详情
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

//清除动作detail
export const clearExerciseDetail = () => ({
  type: actionTypes.CLEAR_DETAIL_DATA,
  detailList: []
});

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
const getfilterData = result => ({
  type: actionTypes.FILTER_EXERCISE,
  exerciseList: result
});
export const sendRequestToUpdate = (
  exercise_implement_id,
  sort_id,
  difficult_id
) => {
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
      dispatch(getfilterData(result));
    });
  };
};

//显示模态框
export const showModal = () => ({
  type: actionTypes.SHOW_MODAL,
  value: true
});

//隐藏模态框
export const hideModal = () => ({
  type: actionTypes.HIDE_MODAL,
  value: false
});

//添加动作到定制计划
export const addPersonalPlan = (values, props) => {
  return dispatch => {
    post("http://localhost:3005/exercise/add/item", values).then(response => {
      if (response === null || response === undefined) {
        alert("添加失败");
      } else {
        message.success("添加成功");
        props.props.history.push("/personal");
      }
    });
  };
};
