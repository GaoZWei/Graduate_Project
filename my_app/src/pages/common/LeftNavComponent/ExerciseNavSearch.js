import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "../../exercise/store";
import { actionCreator as actionCreator1 } from "../../plan/store";
import "../style.css";
import { Input } from "antd";
const Search = Input.Search;
class ExerciseNavSearch extends Component {
  render() {
    const { SearchExercise } = this.props;
    return (
      <div className="antd_input2">
        <Search
          placeholder="动作名"
          enterButton
          onSearch={value => SearchExercise(value, this.props)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  //保证了当前页是搜索页也可以改状态
  SearchExercise(exercise_name, props) {
    if (props.location.pathname.indexOf("/exercise") > -1) {
      const action = actionCreator.getSearchExercise(exercise_name);
      dispatch(action);
      props.history.push("/exercise");
    } else {
      const action = actionCreator1.getSearchPlan(exercise_name);
      dispatch(action);
      props.history.push("/plan");
    }
  }
});
export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(withRouter(ExerciseNavSearch));
