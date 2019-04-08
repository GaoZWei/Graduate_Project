import * as actionTypes from "./actionTypes";
//immutable库
import {
  fromJS
} from "immutable";

const defaultState = fromJS({
  planlist: [],
  planDetialList:[]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAN_DATA:
      // console.log(fromJS(action.planlist));
      return state.set("planlist", fromJS(action.planlist));
    case actionTypes.CHANGE_PLAN_DETAIL:
      // console.log(fromJS(action.planlist));
      return state.set("planDetialList", fromJS(action.planDetialList));
    default:
      return state;
  }
};