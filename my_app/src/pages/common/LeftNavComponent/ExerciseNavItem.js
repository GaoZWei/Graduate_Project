import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import "../style.css";
// import { actionCreator } from "../store";
import { Collapse, Row, Button } from "antd";
const Panel = Collapse.Panel;

class ExerciseNavItem extends Component {
  render() {
    //完成左侧panel的切换
    var recent_path = this.props.location.pathname;
    var selectkey = "";
    if (recent_path.indexOf("/plan") > -1) {
      selectkey = "1";
    } else if (recent_path.indexOf("/exercise") > -1) {
      selectkey = "2";
    }
    const {
      exerciseImplementList,
      exerciseFixedImplementList,
      exerciseFreeImplementList,
      exerciseBodyList,
      exerciseDifficultList,
      planAimList,
      planDaysList,
      planImplementList,
      planBodyList,
      ex_selectImplement,
      ex_selectBody,
      ex_selectDifficulty,
      pl_selectAim,
      pl_selectDay,
      pl_selectImplement,
      pl_selectBody,
      changeExerciseList
    } = this.props;
    return (
      <Fragment>
        <Collapse
          accordion
          defaultActiveKey={[selectkey]}
          // activeKey={["1"]}
          className="left_nav_collapse"
        >
          <Panel
            header="健身计划"
            key="1"
            className="left_nav_collapse_panel"
            // className={selectPage === "plan_panel" ? selectPage : ""}
          >
            <Link to="/plan">
              <div className="left_nav">
                <div className="left_nav_title">
                  <i className="iconfont">&#xe8ab;</i>&nbsp;&nbsp;训练目标
                </div>
                <Row gutter={16}>
                  {planAimList.map((item, index) => {
                    return (
                      <Button size="small" type="primary" key={index}>
                        {item.get("sort_name")}
                      </Button>
                    );
                  })}
                </Row>
              </div>
              <div className="left_nav">
                <div className="left_nav_title">
                  <i className="iconfont"> &#xe889;</i>&nbsp;&nbsp;每周训练天数
                </div>
                <Row gutter={16}>
                  {planDaysList.map((item, index) => {
                    return (
                      <Button size="small" type="primary" key={index}>
                        {item.get("day_name")}
                      </Button>
                    );
                  })}
                </Row>
              </div>
              <div className="left_nav">
                <div className="left_nav_title">
                  <i className="iconfont">&#xe65d;</i>&nbsp;&nbsp;器械要求
                </div>
                <Row gutter={16}>
                  {planImplementList.map((item, index) => {
                    return (
                      <Button size="small" type="primary" key={index}>
                        {item.get("implement_name")}
                      </Button>
                    );
                  })}
                </Row>
              </div>
              <div className="left_nav">
                <div className="left_nav_title">
                  <i className="iconfont">&#xe884;</i>&nbsp;&nbsp;训练部位
                </div>
                <Row gutter={16}>
                  {planBodyList.map((item, index) => {
                    return (
                      <Button size="small" type="primary" key={index}>
                        {item.get("body_name")}
                      </Button>
                    );
                  })}
                </Row>
              </div>
            </Link>
          </Panel>
          <Panel
            header="健身动作"
            key="2"
            className="left_nav_collapse_panel"
            // className={
            //   selectPage !== "plan_panel" ? selectPage : "exercise_panel"
            // }
          >
            <Link to="/exercise">
              <div className="left_nav">
                <div className="left_nav_title">
                  <i className="iconfont">&#xe65d;</i>&nbsp;&nbsp;器械要求
                </div>
                <Row gutter={16}>
                  {exerciseImplementList.map((item, index) => {
                    return (
                      <Button
                        size="small"
                        type="primary"
                        key={index}
                        onClick={() => {
                          changeExerciseList(
                            item.get("exercise_implement_id"),
                            ex_selectBody,
                            ex_selectDifficulty
                          );
                        }}
                      >
                        {item.get("exercise_implement_name")}
                      </Button>
                    );
                  })}
                </Row>
              </div>
              <div className="left_nav">
                <div className="left_nav_title"> 固定器械</div>
                <Row gutter={16}>
                  {exerciseFixedImplementList.map((item, index) => {
                    return (
                      <Button
                        size="small"
                        type="primary"
                        key={index}
                        onClick={() => {
                          changeExerciseList(
                            item.get("exercise_implement_id"),
                            ex_selectBody,
                            ex_selectDifficulty
                          );
                        }}
                      >
                        {item.get("exercise_implement_name")}
                      </Button>
                    );
                  })}
                </Row>
              </div>
              <div className="left_nav">
                <div className="left_nav_title"> 自由器械</div>
                <Row gutter={16}>
                  {exerciseFreeImplementList.map((item, index) => {
                    return (
                      <Button
                        size="small"
                        type="primary"
                        key={index}
                        onClick={() => {
                          changeExerciseList(
                            item.get("exercise_implement_id"),
                            ex_selectBody,
                            ex_selectDifficulty
                          );
                        }}
                      >
                        {item.get("exercise_implement_name")}
                      </Button>
                    );
                  })}
                </Row>
              </div>
              <div className="left_nav">
                <div className="left_nav_title">
                  <i className="iconfont">&#xe884;</i>&nbsp;&nbsp;训练部位
                </div>
                <Row gutter={16}>
                  {exerciseBodyList.map((item, index) => {
                    return (
                      <Button
                        size="small"
                        type="primary"
                        key={index}
                        onClick={() => {
                          changeExerciseList(
                            ex_selectImplement,
                            item.get("sort_id"),
                            ex_selectDifficulty
                          );
                        }}
                      >
                        {item.get("sort_name")}
                      </Button>
                    );
                  })}
                </Row>
              </div>
              <div className="left_nav">
                <div className="left_nav_title">
                  <i className="iconfont">&#xe609;</i>&nbsp;&nbsp;训练难度
                </div>
                <Row gutter={16}>
                  {exerciseDifficultList.map((item, index) => {
                    return (
                      <Button
                        size="small"
                        type="primary"
                        key={index}
                        onClick={() => {
                          changeExerciseList(
                            ex_selectImplement,
                            ex_selectBody,
                            item.get("difficult_id")
                          );
                        }}
                      >
                        {item.get("difficult_name")}
                      </Button>
                    );
                  })}
                </Row>
              </div>
            </Link>
          </Panel>
        </Collapse>
      </Fragment>
    );
  }
  componentDidMount() {
    this.props.getNavLeft();
  }
}
const mapStateToProps = state => ({
  selectPage: state.getIn(["header", "selectPage"]),
  exerciseImplementList: state.getIn(["header", "exerciseImplementList"]),
  exerciseFixedImplementList: state.getIn([
    "header",
    "exerciseFixedImplementList"
  ]),
  exerciseFreeImplementList: state.getIn([
    "header",
    "exerciseFreeImplementList"
  ]),
  exerciseBodyList: state.getIn(["header", "exerciseBodyList"]),
  exerciseDifficultList: state.getIn(["header", "exerciseDifficultList"]),
  planAimList: state.getIn(["header", "planAimList"]),
  planDaysList: state.getIn(["header", "planDaysList"]),
  planImplementList: state.getIn(["header", "planImplementList"]),
  planBodyList: state.getIn(["header", "planBodyList"]),
  ex_selectImplement: state.getIn(["header", "ex_selectImplement"]),
  ex_selectBody: state.getIn(["header", "ex_selectBody"]),
  ex_selectDifficulty: state.getIn(["header", "ex_selectDifficulty"]),
  pl_selectAim: state.getIn(["header", "pl_selectAim"]),
  pl_selectDay: state.getIn(["header", "pl_selectDay"]),
  pl_selectImplement: state.getIn(["header", "pl_selectImplement"]),
  pl_selectBody: state.getIn(["header", "pl_selectBody"])
});

const mapDispatchToProps = dispatch => ({
  //获取implement参数
  getNavLeft() {
    dispatch(actionCreator.getExerciseImplement());
    dispatch(actionCreator.getExerciseFixedImplement());
    dispatch(actionCreator.getExerciseFreeImplement());
    dispatch(actionCreator.getExerciseBody());
    dispatch(actionCreator.getExerciseDefficult());
    dispatch(actionCreator.getPlanAim());
    dispatch(actionCreator.getPlanDay());
    dispatch(actionCreator.getPlanImplement());
    dispatch(actionCreator.getPlanBody());
  },
  changeExerciseList(exercise_implement_id, sort_id, difficult_id) {
    dispatch(
      actionCreator.updateEx_select(
        exercise_implement_id,
        sort_id,
        difficult_id
      )
    );
    dispatch(
      actionCreator.sendRequestToUpdate(
        exercise_implement_id,
        sort_id,
        difficult_id
      )
    );
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExerciseNavItem));
