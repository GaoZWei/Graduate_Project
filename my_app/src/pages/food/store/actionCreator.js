import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";

// 获取食物分类
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

// 获取分类下列表
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
// 获取食物详情
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
// 获取相关食物
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

// 获取搜索食物
const getsearchFood = result => ({
  type: actionTypes.GET_SEARCH_FOOD,
  foodList: result
});
export const getSearchFood =food_name=> {
  return dispatch => {
    // var food_name1=decodeURI(food_name)
    fetch("/food/search?food_name=" + encodeURI(food_name)).then(res => {
      const result = res;
      dispatch(getsearchFood(result));
    });
  };
};
