import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  // focused: false,
  // list: [],
  // mouseIn: false,
  // page: 1,
  // totalPage: 1,
  selectValue: ""
  // selectPage:'plan_panel'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    // case actionTypes.SEARCH_FOCUS:
    //immutable对象的set方法,会结合之前的immutable对象的值
    //和设置的值,返回一个全新的对象
    //   return state.set("focused", true);
    // case actionTypes.SEARCH_BLUR:
    //   return state.set("focused", false);
    // case actionTypes.MOUSE_ENTER:
    //   return state.set("mouseIn", true);
    // case actionTypes.MOUSE_LEAVE:
    //   return state.set("mouseIn", false);
    // case actionTypes.CHANGE_LIST:
    //   return state.merge({
    //     'list': action.data,
    //     'totalPage': action.totalPage
    //   })
    // case actionTypes.CHANGE_PAGE:
    //   return state.set("page", action.page);
    case actionTypes.CHANGE_NAV:
      return state.set("selectValue", action.item);
    default:
      return state;
  }
};
