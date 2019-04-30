import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  planlist: [],
  planDetialList: [],
  planDetialTable: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAN_DATA:
      return state.set("planlist", fromJS(action.planlist));
    case actionTypes.CHANGE_PLAN_DETAIL:
      // return state.set("planDetialList", fromJS(action.planDetialList));
      //实现两个列表list
      return state.merge({
        planDetialList: fromJS(action.planDetialList),
        planDetialTable: fromJS(action.planDetialTable)
      });
    case actionTypes.GET_SEARCH_DATA:
      return state.set("planlist", fromJS(action.planlist));
    case actionTypes.FILTER_PLAN:
      return state.set("planlist", fromJS(action.planlist));
    default:
      return state;
  }
};
