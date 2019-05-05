import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";
//热点新闻
const changehotData = result => ({
  type: actionTypes.CHANGE_HOT_DATA,
  hotList: result
});

export const changeHotInfo = () => {
  return dispatch => {
    fetch("/main/health/hot").then(res => {
      const result = res;
      dispatch(changehotData(result));
    });
  };
};

//健康知识
const changehealthData = result => ({
  type: actionTypes.CHANGE_HEALTH_DATA,
  healthList: result
});

export const changeHealthInfo = () => {
  return dispatch => {
    fetch("/main/health/health_knowledge").then(res => {
      const result = res;
      dispatch(changehealthData(result));
    });
  };
};



//健身计划
const changeplanData = result => ({
  type: actionTypes.CHANGE_PLAN_DATA,
  planList: result
});
export const changePlanInfo = () => {
  return dispatch => {
    fetch("/main/plan").then(res => {
      const result = res;
      dispatch(changeplanData(result));
    });
  };
};

// 动作列表
const changehomeData = result => ({
  type: actionTypes.CHANGE_EXERCISE_DATA,
  exerciseList: result
});

export const changeHomeInfo = () => {
  return dispatch => {
    fetch("/main/exercise").then(res => {
      const result = res;
      dispatch(changehomeData(result));
    });
  };
};

//食物新闻
const changeFoodKnowledgeData = result => ({
  type: actionTypes.CHANGE_FOOD_KNOWLEDGE_DATA,
  foodKnowledgeList: result
});

export const changeFoodKnowledgeInfo = () => {
  return dispatch => {
    fetch("/main/health/food_knowledge").then(res => {
      const result = res;
      dispatch(changeFoodKnowledgeData(result));
    });
  };
};

//饮食知识
const changeFoodData = result => ({
  type: actionTypes.CHANGE_FOOD_DATA,
  foodList: result
});

export const changeFoodInfo = () => {
  return dispatch => {
    fetch("/main/food").then(res => {
      const result = res;
      dispatch(changeFoodData(result));
    });
  };
};