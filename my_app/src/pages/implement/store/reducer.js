import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  implementList: [],
  implement_detailList: [],
  height: "",
  weight: "",
  sex: "",
  age: ""
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
    default:
      return state;
  }
};
