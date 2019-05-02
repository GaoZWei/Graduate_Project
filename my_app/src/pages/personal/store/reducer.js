import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  userBasicList: [],
  userCommomPlanList: [],
  userPersonalPlanList: [],
  userFoodList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_BASIC:
      return state.merge({
        userBasicList: fromJS(action.userBasicList),
        userCommomPlanList: fromJS(action.userCommomPlanList),
        userPersonalPlanList: fromJS(action.userPersonalPlanList),
        userFoodList: fromJS(action.userFoodList)
      });
    default:
      return state;
  }
};
