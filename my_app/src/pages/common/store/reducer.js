import * as actionTypes from "./actionTypes";
//immutable库
import { fromJS } from "immutable";

const defaultState = fromJS({
  selectValue: "",
  exerciseImplementList: [],
  exerciseFixedImplementList: [],
  exerciseFreeImplementList: [],
  exerciseBodyList: [],
  exerciseDifficultList: [],
  planAimList: [],
  planDaysList: [],
  planImplementList: [],
  planBodyList: [],
  ex_selectImplement: 'all',
  ex_selectBody:'all',
  ex_selectDifficulty: 'all',
  pl_selectAim: 0,
  pl_selectDay: 0,
  pl_selectImplement: 0,
  pl_selectBody: 0
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NAV:
      return state.set("selectValue", action.item);
    case actionTypes.CHANGE_EXERCISEIMPLEMENT:
      return state.set(
        "exerciseImplementList",
        fromJS(action.exerciseImplementList)
      );
    case actionTypes.CHANGE_EXERCISEFIXEDIMPLEMENT:
      return state.set(
        "exerciseFixedImplementList",
        fromJS(action.exerciseFixedImplementList)
      );
    case actionTypes.CHANGE_EXERCISEFREEIMPLEMENT:
      return state.set(
        "exerciseFreeImplementList",
        fromJS(action.exerciseFreeImplementList)
      );
    case actionTypes.CHANGE_EXERCISEBODY:
      return state.set("exerciseBodyList", fromJS(action.exerciseBodyList));
    case actionTypes.CHANGE_EXERCISEDIFFICULT:
      return state.set(
        "exerciseDifficultList",
        fromJS(action.exerciseDifficultList)
      );
    case actionTypes.CHANGE_PLANAIM:
      return state.set("planAimList", fromJS(action.planAimList));
    case actionTypes.CHANGE_PLANDAYS:
      return state.set("planDaysList", fromJS(action.planDaysList));
    case actionTypes.CHANGE_PLANIMPLEMENT:
      return state.set("planImplementList", fromJS(action.planImplementList));
    case actionTypes.CHANGE_PLANBODY:
      return state.set("planBodyList", fromJS(action.planBodyList));
    case actionTypes.UPDATE_EX_SELECTIMPLEMENT:
      return state.merge({
        ex_selectImplement: fromJS(action.exercise_implement_id),
        ex_selectBody: fromJS(action.sort_id),
        ex_selectDifficulty: fromJS(action.difficult_id)
      });
    default:
      return state;
  }
};
