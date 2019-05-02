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
      return state.set("userBasicList", fromJS(action.userBasicList));
    case actionTypes.GET_USER_COMMON_PLAN:
      return state.set("userCommomPlanList", fromJS(action.userCommomPlanList));
    case actionTypes.GET_USER_PERSONAL_PLAN:
      return state.set(
        "userPersonalPlanList",
        fromJS(action.userPersonalPlanList)
      );
    case actionTypes.GET_USER_FOODLIST:
      return state.set("userFoodList", fromJS(action.userFoodList));
    default:
      return state;
  }
};
