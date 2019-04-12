import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";
import { fromJS } from "immutable";

// 修改导航的panel
export const changeNavItem = item => ({
  type: actionTypes.CHANGE_NAV,
  item: fromJS(item)
});

//----获取左侧导航参数-----

// 获取动作的器械要求
const changeexerciseImplement = result => ({
  type: actionTypes.CHANGE_EXERCISEIMPLEMENT,
  exerciseImplementList: result
});
export const getExerciseImplement = () => {
  return dispatch => {
    // axios.get
    fetch("/param/exercise_implement").then(res => {
      const result = res;
      dispatch(changeexerciseImplement(result));
    });
  };
};
// 获取动作的固定器械
const changeexercisefixed = result => ({
  type: actionTypes.CHANGE_EXERCISEFIXEDIMPLEMENT,
  exerciseFixedImplementList: result
});
export const getExerciseFixedImplement = exercise_id => {
  return dispatch => {
    // axios.get
    fetch("/param/exercise_implement_fix").then(res => {
      const result = res;
      dispatch(changeexercisefixed(result));
    });
  };
};
// 获取动作的自由器械
const changeexercisefree = result => ({
  type: actionTypes.CHANGE_EXERCISEFREEIMPLEMENT,
  exerciseFreeImplementList: result
});
export const getExerciseFreeImplement = exercise_id => {
  return dispatch => {
    // axios.get
    fetch("/param/exercise_implement_free").then(res => {
      const result = res;
      dispatch(changeexercisefree(result));
    });
  };
};

// 获取动作的训练部位
const changeexercisebody = result => ({
  type: actionTypes.CHANGE_EXERCISEBODY,
  exerciseBodyList: result
});
export const getExerciseBody = exercise_id => {
  return dispatch => {
    // axios.get
    fetch("/param/exercise_sort").then(res => {
      const result = res;
      dispatch(changeexercisebody(result));
    });
  };
};
// 获取动作的训练难度
const changeexercisedifficult = result => ({
  type: actionTypes.CHANGE_EXERCISEDIFFICULT,
  exerciseDifficultList: result
});
export const getExerciseDefficult = exercise_id => {
  return dispatch => {
    // axios.get
    fetch("/param/exercise_difficult").then(res => {
      const result = res;
      dispatch(changeexercisedifficult(result));
    });
  };
};
// 获取计划的训练目标
const changeplanaim = result => ({
  type: actionTypes.CHANGE_PLANAIM,
  planAimList: result
});
export const getPlanAim = exercise_id => {
  return dispatch => {
    // axios.get
    fetch("/param/plan_aim").then(res => {
      const result = res;
      dispatch(changeplanaim(result));
    });
  };
};
// 获取计划的训练天数
const changeplanday = result => ({
  type: actionTypes.CHANGE_PLANDAYS,
  planDaysList: result
});
export const getPlanDay = exercise_id => {
  return dispatch => {
    // axios.get
    fetch("/param/plan_days").then(res => {
      const result = res;
      dispatch(changeplanday(result));
    });
  };
};

// 获取计划的器械要求
const changeplanimplement = result => ({
  type: actionTypes.CHANGE_PLANIMPLEMENT,
  planImplementList: result
});
export const getPlanImplement = exercise_id => {
  return dispatch => {
    // axios.get
    fetch("/param/plan_implement").then(res => {
      const result = res;
      dispatch(changeplanimplement(result));
    });
  };
};
// 获取计划的训练部位
const changeplanbody = result => ({
  type: actionTypes.CHANGE_PLANBODY,
  planBodyList: result
});
export const getPlanBody = exercise_id => {
  return dispatch => {
    // axios.get
    fetch("/param/plan_body").then(res => {
      const result = res;
      dispatch(changeplanbody(result));
    });
  };
};
