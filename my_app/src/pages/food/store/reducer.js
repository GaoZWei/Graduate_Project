import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  foodsortList: [],
  foodList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_FOOD_SORT_DATA:
      return state.set("foodsortList", fromJS(action.foodsortList));
    case actionTypes.GET_FOOD_DATA:
      return state.set("foodList", fromJS(action.foodList));
    default:
      return state;
  }
};
