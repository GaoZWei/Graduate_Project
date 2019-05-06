import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  exerciseList: [],
  foodList: [],
  planList: [],
  healthList: [],
  implementList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_EXERCISE_DATA:
      return state.set("exerciseList", fromJS(action.exerciseList));
    case actionTypes.GET_FOOD_DATA:
      return state.set("foodList", fromJS(action.foodList));
    case actionTypes.GET_PLAN_DATA:
      return state.set("planList", fromJS(action.planList));
    case actionTypes.GET_HEALTH_DATA:
      return state.set("healthList", fromJS(action.healthList));
    case actionTypes.GET_IMPLEMENT_DATA:
      return state.set("implementList", fromJS(action.implementList));
    default:
      return state;
  }
};