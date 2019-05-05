import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  exerciseList: [],
  hotList: [],
  foodKnowledgeList: [],
  planList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_EXERCISE_DATA:
      return state.set("exerciseList", fromJS(action.exerciseList));
    case actionTypes.CHANGE_HOT_DATA:
      return state.set("hotList", fromJS(action.hotList));
    case actionTypes.CHANGE_FOOD_KNOWLEDGE_DATA:
      return state.set("foodKnowledgeList", fromJS(action.foodKnowledgeList));
    case actionTypes.CHANGE_PLAN_DATA:
      return state.set("planList", fromJS(action.planList));
    default:
      return state;
  }
};
