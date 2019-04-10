import * as actionTypes from "./actionTypes";
//immutable库
import {
  fromJS
} from "immutable";

const defaultState = fromJS({
  foodsortList: [],
  foodList: [],
  fooddetailList: [],
  relateList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_FOOD_SORT_DATA:
      return state.set("foodsortList", fromJS(action.foodsortList));
    case actionTypes.GET_FOOD_DATA:
      return state.set("foodList", fromJS(action.foodList));
    case actionTypes.GET_FOOD_DETAIL:
      return state.set("fooddetailList", fromJS(action.fooddetailList));
    case actionTypes.GET_RELATED_FOOD:
      return state.set("relateList", fromJS(action.relateList));
    default:
      return state;
  }
};