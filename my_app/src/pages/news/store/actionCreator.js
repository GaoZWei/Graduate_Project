import * as actionTypes from "./actionTypes";
import {
  fetch
} from "../../../util/HttpUtil";

const changehealthData = (AddMuscleData, ReduceFatData, FoodKnowledge) => ({
  type: actionTypes.CHANGE_NEWS_DATA,
  // newsList: result
  AddMuscleData: AddMuscleData,
  ReduceFatData: ReduceFatData,
  FoodKnowledge: FoodKnowledge
});

export const changeHealthInfo = () => {
  return dispatch => {
    fetch("/health").then(res => {
      const AddMuscleData = [];
      const ReduceFatData = [];
      const FoodKnowledge = [];
      for (let i = 0; i < res.length; i++) {
        if (res[i].health_sort === '1') {
          AddMuscleData.push(res[i]);
        } else if (res[i].health_sort === '2') {
          ReduceFatData.push(res[i]);
        } else if (res[i].health_sort === '3') {
          FoodKnowledge.push(res[i]);
        }
      }
      dispatch(changehealthData(AddMuscleData, ReduceFatData, FoodKnowledge));
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