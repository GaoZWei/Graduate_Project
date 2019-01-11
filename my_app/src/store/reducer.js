import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../pages/common/store/"
const reducer = combineReducers({
  header: headerReducer
});

export default reducer;

// const defaultState={
//     selectValue:1
// }
// export default (state=defaultState, action) => {
//     if(action.type==='change_input_value'){
//         const newState=JSON.parse(JSON.stringify(state));
//         newState.inputValue=action.value;
//         return newState;
//     }
//     if(action.type==='add_list_item'){
//         const newState=JSON.parse(JSON.stringify(state));
//         newState.list.push(newState.inputValue);
//         newState.inputValue='';
//         return newState;
//     }
//     return state;
// }

