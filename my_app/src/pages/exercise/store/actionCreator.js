import axios from "axios";
import * as actionTypes from "./actionTypes";
// import { fromJS } from "immutable";

const changehomeData = result => ({
  type: actionTypes.CHANGE_HOME_DATA,
  exerciseList: result
});
export const changeHomeInfo = () => {
  return dispatch => {
    axios.get("/exercise").then(res => {
      const result = res.data;
      dispatch(changehomeData(result));
    });
  };
};