import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  exerciseList: [],
  detailList: [],
  modelVisible: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_EXERCISE_DATA:
      return state.set("exerciseList", fromJS(action.exerciseList));
    case actionTypes.CHANGE_DETAIL_DATA:
      return state.set("detailList", fromJS(action.detailList));
    case actionTypes.GET_SEARCH_DATA:
      return state.set("exerciseList", fromJS(action.exerciseList));
    case actionTypes.FILTER_EXERCISE:
      return state.set("exerciseList", fromJS(action.exerciseList));
    case actionTypes.SHOW_MODAL:
      return state.set("modelVisible", action.value);
    case actionTypes.HIDE_MODAL:
      return state.set("modelVisible", action.value);
    default:
      return state;
  }
};
