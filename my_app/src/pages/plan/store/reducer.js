import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  planList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.PLAN_DATA:
      return state.set("planList", fromJS(action.planList));
  }
};
