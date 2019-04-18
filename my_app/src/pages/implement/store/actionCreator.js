import * as actionTypes from "./actionTypes";
import { fetch } from "../../../util/HttpUtil";

const changeImplementData = result => ({
  type: actionTypes.CHANGE_IMPLEMENT_DATA,
  implementList: result
});

export const changeImplementInfo = () => {
  return dispatch => {
    fetch("/implement").then(res => {
      const result = res;
      dispatch(changeImplementData(result));
    });
  };
};

const changeDetailData = result => ({
  type: actionTypes.GET_IMPLEMENT_DETAIL,
  implement_detailList: result
});
export const getImplementDetail = implement_id => {
  return dispatch => {
    // axios.get
    fetch("/implement/" + implement_id).then(res => {
      const result = res;
      console.log(res)
      dispatch(changeDetailData(result));
    });
  };
};

export const updateBmiResult = bmiResult => ({
  type: actionTypes.UPDATE_BMI_RESULT,
  bmiResult: bmiResult
});


export const updateStandardResult = standardWeight => ({
  type: actionTypes.UPDATE_STANDARD_RESULT,
  standardWeight: standardWeight
});

export const updateHeartRateResult = heartRate => ({
  type: actionTypes.UPDATE_HEARTRATE_RESULT,
  heartRate: heartRate
});

export const updateWaterResult = waterResult => ({
  type: actionTypes.UPDATE_WATER_RESULT,
  waterResult: waterResult
});
