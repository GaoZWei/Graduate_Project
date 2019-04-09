import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  userList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_DATA:
      return state.set("userList", fromJS(action.userList));
    default:
      return state;
  }
};
