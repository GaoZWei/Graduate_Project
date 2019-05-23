import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  userBasicList: [],
  userCommomPlanList: [],
  userPersonalPlanList: [],
  userFoodList: [],
  modelVisible: false,
  rowIndex: 0,
  recordItem:[]
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
    case actionTypes.SHOW_MODAL:
      // return state.set("modelVisible", action.value);
      return state.merge({
        modelVisible: action.value,
        rowIndex: action.index,
        recordItem:action.recordItem
      });
    case actionTypes.HIDE_MODAL:
      // return state.set("modelVisible", action.value);
      return state.merge({
        modelVisible: action.value,
        rowIndex: 0,
        recordItem:[]
      });
    default:
      return state;
  }
};
