import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  exerciseList: [],
  detailList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_EXERCISE_DATA:
      return state.set("exerciseList", fromJS(action.exerciseList));
    case actionTypes.CHANGE_DETAIL_DATA:
      return state.set("detailList", fromJS(action.detailList));
    default:
      return state;
  }
};
