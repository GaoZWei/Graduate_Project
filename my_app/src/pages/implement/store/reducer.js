import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  implementList: [],
  implement_detailList: [],
  height: "",
  weight: "",
  sex: "",
  age: "",
  bmiResult: "",
  standardWeight: "",
  heartRate: "",
  waterResult: "",
  basicMetaResult: ""
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_IMPLEMENT_DATA:
      return state.set("implementList", fromJS(action.implementList));
    case actionTypes.GET_IMPLEMENT_DETAIL:
      return state.set(
        "implement_detailList",
        fromJS(action.implement_detailList)
      );
    case actionTypes.UPDATE_BMI_RESULT:
      return state.set("bmiResult", fromJS(action.bmiResult));
    case actionTypes.UPDATE_STANDARD_RESULT:
      return state.set("standardWeight", fromJS(action.standardWeight));
    case actionTypes.UPDATE_HEARTRATE_RESULT:
      return state.set("heartRate", fromJS(action.heartRate));
    case actionTypes.UPDATE_WATER_RESULT:
      return state.set("waterResult", fromJS(action.waterResult));
    case actionTypes.UPDATE_BASICMETA_RESULT:
      return state.set("basicMetaResult", fromJS(action.basicMetaResult));
    default:
      return state;
  }
};
