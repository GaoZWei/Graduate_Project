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
      var results = {
        info: util(res.info),
        detail: util(res.detail)
      };
      dispatch(getplanData(results));
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
  console.log(values);
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
  console.log(values);
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

//更新动作
export const updateExerciseMessage = values => {
  return dispatch => {
    post("/admin/update/item1", values).then(res => {
      if ((res = "ok")) {
        message.success("修改成功");
        dispatch(getExerciseInfo());
      } else {
        message.error("修改失败");
      }
    });
  };
};
//添加动作
export const insertExerciseMessage = values => {
  return dispatch => {
    post("/admin/insert/item1", values).then(res => {
      if ((res = "ok")) {
        message.success("添加成功");
        dispatch(getExerciseInfo());
      } else {
        message.error("添加失败");
      }
    });
  };
};

//更新健康知识
export const updateHealthMessage = values => {
  return dispatch => {
    post("/admin/update/item2", values).then(res => {
      if ((res = "ok")) {
        message.success("修改成功");
        dispatch(getHealthInfo());
      } else {
        message.error("修改失败");
      }
    });
  };
};
//添加健康知识
export const insertHealthMessage = values => {
  console.log(values);
  return dispatch => {
    post("/admin/insert/item2", values).then(res => {
      if ((res = "ok")) {
        message.success("添加成功");
        dispatch(getHealthInfo());
      } else {
        message.error("添加失败");
      }
    });
  };
};

//更新健身工具
export const updateImplementMessage = values => {
  console.log(values);
  return dispatch => {
    post("/admin/update/item3", values).then(res => {
      if ((res = "ok")) {
        message.success("修改成功");
        dispatch(getImplementInfo());
      } else {
        message.error("修改失败");
      }
    });
  };
};
//添加健身工具
export const insertImplementMessage = values => {
  console.log(values);
  return dispatch => {
    post("/admin/insert/item3", values).then(res => {
      if ((res = "ok")) {
        message.success("添加成功");
        dispatch(getImplementInfo());
      } else {
        message.error("添加失败");
      }
    });
  };
};

//更新健身计划
export const updatePlanMessage = values => {
  console.log(values);
  return dispatch => {
    post("/admin/update/item4", values).then(res => {
      if ((res === "ok")) {
        message.success("修改成功");
        dispatch(getPlanInfo());
      } else {
        message.error("修改失败");
      }
    });
  };
};
//添加健身计划
export const insertPlanMessage = values => {
  console.log(values);
  return dispatch => {
    post("/admin/insert/item4", values).then(res => {
      if (res === "ok") {
        message.success("添加成功");
        dispatch(getPlanInfo());
      } else {
        message.error("添加失败");
      }
    });
  };
};

export const showModal1 = () => ({
  type: actionTypes.SHOW_MODAL1,
  value: true
});

//隐藏模态框
export const hideModal1 = () => ({
  type: actionTypes.HIDE_MODAL1,
  value: false
});

export const updatePlanDetailMessage = values => {
  return dispatch => {
    post("/admin/update/item5", values).then(res => {
      if (res === "ok") {
        message.success("修改成功");
        dispatch(getPlanInfo());
      } else {
        message.error("修改失败");
      }
    })
    .catch(error=>{
      message.error("修改失败");
    });
  };
};

export const deletePlanDetailMessage = values => {
  console.log(123)
  return dispatch => {
    post("/admin/delete/item5", values).then(res => {
      if (res === "ok") {
        message.success("删除成功");
        dispatch(getPlanInfo());
      } else {
        message.error("删除失败");
      }
    })
  };
};


