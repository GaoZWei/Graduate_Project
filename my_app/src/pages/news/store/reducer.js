import * as actionTypes from "./actionTypes";
//immutable库
import {
  fromJS
} from "immutable";

const defaultState = fromJS({
  newsList: [],
  detailList: [],
  AddMuscleData: [],
  ReduceFatData: [],
  FoodKnowledge: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NEWS_DATA:
      // return state.set("newsList", fromJS(action.newsList));
      return state.merge({
        AddMuscleData: fromJS(action.AddMuscleData),
        ReduceFatData: fromJS(action.ReduceFatData),
        FoodKnowledge: fromJS(action.FoodKnowledge),
      });
    case actionTypes.CHANGE_NEWS_DETAIL:
      return state.set("detailList", fromJS(action.detailList));
    default:
      return state;
  }
};