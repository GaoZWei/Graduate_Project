import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
export const changeNavItem = item => ({
  type: actionTypes.CHANGE_NAV,
  item: fromJS(item)
});
