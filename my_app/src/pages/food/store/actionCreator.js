import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";

const changefoodSort = result => ({
  type: actionTypes.GET_FOOD_SORT_DATA,
  foodsortList: result
});

export const changeFoodSort = () => {
  return dispatch => {
    fetch("/food").then(res => {
      const result = res;
      dispatch(changefoodSort(result));
    });
  };
};

const getfood = result => ({
  type: actionTypes.GET_FOOD_DATA,
  foodList: result
});
export const getFoodItem = sort_id => {
  return dispatch => {
    fetch("/food/" + sort_id).then(res => {
      const result = res;
      dispatch(getfood(result));
    });
  };
};

const getfooddetail = result => ({
  type: actionTypes.GET_FOOD_DETAIL,
  fooddetailList: result
});
export const getFoodDetail = food_id => {
  return dispatch => {
    fetch("/food/detail/" + food_id).then(res => {
      const result = res;
      dispatch(getfooddetail(result));
    });
  };
};

const getrelatefood = result => ({
  type: actionTypes.GET_RELATED_FOOD,
  relateList: result
});
export const getRelateFood = food_id => {
  return dispatch => {
    fetch("/food/relate/" + food_id).then(res => {
      const result = res;
      dispatch(getrelatefood(result));
    });
  };
};

// const changeDetailData = result => ({
//   type: actionTypes.CHANGE_DETAIL_DATA,
//   detailList: result
// });
// export const getExerciseDetail = exercise_id => {
//   return dispatch => {
//     // axios.get
//     fetch("/exercise/" + exercise_id).then(res => {
//       const result = res;
//       dispatch(changeDetailData(result));
//     });
//   };
// };
