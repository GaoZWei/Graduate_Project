import * as actionTypes from "./actionTypes";
import {
  fetch,
  post
} from "../../../util/HttpUtil";
import {
  message
} from "antd";
// 计划列表
const changeplanData = result => ({
  type: actionTypes.CHANGE_PLAN_DATA,
  planlist: result
});
export const changePlanData = () => {
  return dispatch => {
    fetch("/plan").then(res => {
      const result = res;
      dispatch(changeplanData(result));
    });
  };
};

// 计划详情
const changeplanDetail = (result0, result1) => ({
  type: actionTypes.CHANGE_PLAN_DETAIL,
  planDetialList: result0,
  planDetialTable: result1
});
export const getPlanById = plan_id => {
  return dispatch => {
    fetch("/plan/" + plan_id).then(res => {
      const result0 = res[0];
      const result1 = utilPlan(res[1]);
      dispatch(changeplanDetail(result0, result1));
    });
  };
};

const utilPlan = (obj) => {
  for (var i = 0; i < obj.length; i++) {
    switch (obj[i].plan_day) {
      case '1':
        obj[i].plan_day = '星期一'
        break;
      case '2':
        obj[i].plan_day = '星期二'
        break;
      case '3':
        obj[i].plan_day = '星期三'
        break;
      case '4':
        obj[i].plan_day = '星期四'
        break;
      case '5':
        obj[i].plan_day = '星期五'
        break;
      case '6':
        obj[i].plan_day = '星期六'
        break;
      case '7':
        obj[i].plan_day = '星期日'
        break;
      default:
        break;
    }
    //防止没有
    if (obj[i].group_exercise_name != null) {
      obj[i].group_id = obj[i].group_exercise_id.split(',');
      obj[i].group_name = obj[i].group_exercise_name.split(',');
      obj[i].group_group = obj[i].group_exercise_group.split(',');
      obj[i].group_times = obj[i].group_exercise_times.split(',');
      obj[i].key = i;
    } else {
      obj[i].group_id = [];
      obj[i].group_name = [];
      obj[i].group_group = [];
      obj[i].group_times = [];
      obj[i].key = i;
    }
  }
  return obj;
}

// 搜索计划
const getSearchData = result => ({
  type: actionTypes.GET_SEARCH_DATA,
  planlist: result
});
export const getSearchPlan = plan_name => {
  return dispatch => {
    fetch("/plan/search?plan_name=" + encodeURI(plan_name)).then(res => {
      const result = res;
      dispatch(getSearchData(result));
    });
  };
};

//筛选得出需要计划
const getfilterData = result => ({
  type: actionTypes.FILTER_PLAN,
  planlist: result
});
export const sendRequestToUpdate = (sort_id, day_id, implement_id, body_id) => {
  return dispatch => {
    fetch(
      "/plan/filter/item?plan_aim=" +
      sort_id +
      "&plan_day=" +
      day_id +
      "&plan_implement=" +
      implement_id +
      "&plan_body=" +
      body_id
    ).then(res => {
      const result = res;
      dispatch(getfilterData(result));
    });
  };
};
//添加公共计划
// const getUserData = result => ({
//   type: actionTypes.GET_USER_DATA,
//   userList: result
// });
export const addCommonPlan = (values, props) => {
  return dispatch => {
    post("http://localhost:3005/plan/add/item", values).then(response => {
      if (response === null || response === undefined) {
        alert("添加失败");
      } else {
        message.success("添加成功");
        props.props.history.push("/personal");
      }
    });
  };
};