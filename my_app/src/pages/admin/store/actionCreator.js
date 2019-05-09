import * as actionTypes from "./actionTypes";
import { fetch, post, util } from "../../../util/HttpUtil";
import { fromJS } from "immutable";
import { message } from "antd";
// 修改导航的panel
export const changeNavItem = item => ({
  type: actionTypes.CHANGE_NAV,
  item: fromJS(item)
});

// 动作表格
const getexerciseData = result => ({
  type: actionTypes.CHANGE_EXERCISE_DATA,
  exerciseList: result
});

export const getExerciseInfo = () => {
  return dispatch => {
    fetch("/admin/select/exercise").then(res => {
      const result = util(res);
      dispatch(getexerciseData(result));
    });
  };
};

//食物表格
const getfoodData = result => ({
  type: actionTypes.GET_FOOD_DATA,
  foodList: result
});

export const getFoodInfo = () => {
  return dispatch => {
    fetch("/admin/select/food").then(res => {
      const result = util(res);
      dispatch(getfoodData(result));
    });
  };
};

//计划表格
const getplanData = result => ({
  type: actionTypes.GET_PLAN_DATA,
  planList: result
});

export const getPlanInfo = () => {
  return dispatch => {
    fetch("/admin/select/plan").then(res => {
      const result = util(res);
      dispatch(getplanData(result));
    });
  };
};

//健康表格
const gethealthData = result => ({
  type: actionTypes.GET_HEALTH_DATA,
  healthList: result
});

export const getHealthInfo = () => {
  return dispatch => {
    fetch("/admin/select/health").then(res => {
      const result = util(res);
      dispatch(gethealthData(result));
    });
  };
};
// 健身工具表格
const getimplementData = result => ({
  type: actionTypes.GET_IMPLEMENT_DATA,
  implementList: result
});
export const getImplementInfo = () => {
  return dispatch => {
    fetch("/admin/select/implement").then(res => {
      const result = util(res);
      dispatch(getimplementData(result));
    });
  };
};

//删除食物项
export const deleteFoodList = food_id => {
  return dispatch => {
    fetch("/admin/delete/item1?food_id=" + food_id).then(res => {
      if ((res = "ok")) {
        dispatch(getFoodInfo());
        message.success("删除成功");
      } else {
        message.error("删除失败");
      }
    });
  };
};

//删除动作项
export const deleteExerciseList = exercise_id => {
  return dispatch => {
    fetch("/admin/delete/item2?exercise_id=" + exercise_id).then(res => {
      if ((res = "ok")) {
        console.log(2131231);
        dispatch(getExerciseInfo());
        message.success("删除成功");
      } else {
        message.error("删除失败");
      }
    });
  };
};

//删除计划项
export const deletePlan = plan_id => {
  return dispatch => {
    fetch("/admin/delete/item5?plan_id=" + plan_id).then(res => {
      if ((res = "ok")) {
        dispatch(getPlanInfo());
        message.success("删除成功");
      } else {
        message.error("删除失败");
      }
    });
  };
};

//删除健身工具项
export const deleteImplement = implement_id => {
  return dispatch => {
    fetch("/admin/delete/item3?implement_id=" + implement_id).then(res => {
      if ((res = "ok")) {
        dispatch(getImplementInfo());
        message.success("删除成功");
      } else {
        message.error("删除失败");
      }
    });
  };
};

//删除健康知识项
export const deleteHealth = health_id => {
  return dispatch => {
    fetch("/admin/delete/item4?health_id=" + health_id).then(res => {
      if ((res = "ok")) {
        dispatch(getHealthInfo());
        message.success("删除成功");
      } else {
        message.error("删除失败");
      }
    });
  };
};

//显示模态框
export const showModal = () => ({
  type: actionTypes.SHOW_MODAL,
  value: true
});

//隐藏模态框
export const hideModal = () => ({
  type: actionTypes.HIDE_MODAL,
  value: false
});
// 更新暂存区数据
export const updateTemporaryData = temporaryData => ({
  type: actionTypes.UPDATE_TEMPORARY,
  temporaryData: temporaryData
});
//更新食物
export const updateFoodMessage = values => {
  console.log(values)
  return dispatch => {
    post("/admin/update/item", values).then(res => {
      if ((res = "ok")) {
        message.success("修改成功");
        dispatch(getFoodInfo());
      } else {
        message.error("修改失败");
      }
    });
  };
};
//添加食物
export const insertFoodMessage = values => {
  console.log(values)
  return dispatch => {
    post("/admin/insert/item", values).then(res => {
      if ((res = "ok")) {
        message.success("添加成功");
        dispatch(getFoodInfo());
      } else {
        message.error("添加失败");
      }
    });
  };
};

