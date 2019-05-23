import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "../store";
import { Table, Popconfirm, Row, Col, Modal, Tag } from "antd";
import CustomizeForm from "./CustomizeForm";
class PersonalCustomize extends Component {
  render() {
    const {
      userPersonalPlanList,
      deleteItem,
      showModal,
      modelVisible,
      hideModal,
      handleOK,
      rowIndex,
      recordItem
    } = this.props;
    var userPersonalPlanListArr = userPersonalPlanList.toJS();
    const columns = [
      { title: "计划日期", dataIndex: "plan_day", key: "plan_date" },
      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: (text, record) => {
          return (
            <span>
              <a href="/exercise">添加动作</a>&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          );
        }
      }
    ];
    return (
      <div className="personal_public_plan">
        <div className="personal_public_plan_title">我的定制计划</div>
        <div>
          <Table
            columns={columns}
            expandedRowRender={record => (
              <div style={{ margin: 0 }}>
                <Row>
                  <Col span={5}>
                    {record.group_name.map(tag => {
                      var random2 = new Date() + Math.random();
                      return (
                        <div key={random2}>
                          {tag}:
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <br />
                        </div>
                      );
                    })}
                  </Col>
                  <Col span={4}>
                    {record.group_group.map(tag => {
                      var random3 = new Date() + Math.random();
                      return (
                        <div key={random3}>
                          {tag}组<br />
                        </div>
                      );
                    })}
                  </Col>
                  <Col span={4}>
                    {record.group_times.map(tag => {
                      var random4 = new Date() + Math.random();
                      return (
                        <div key={random4}>
                          每组个数:
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <br />
                        </div>
                      );
                    })}
                  </Col>
                  <Col span={4}>
                    {record.group_times.map(tag => {
                      var random5 = new Date() + Math.random();
                      return (
                        <div key={random5}>
                          {tag}个<br />
                        </div>
                      );
                    })}
                  </Col>
                  <Col>
                    {record.group_id.map((tag, index) => {
                      var random5 = new Date() + Math.random();
                      return (
                        <div key={random5}>
                          {/* <Popconfirm
                            title="确认删除?"
                            onConfirm={() => deleteItem(record, tag)}
                          > */}
                          <Tag
                            color="volcano"
                            onClick={() => deleteItem(record, tag)}
                          >
                            删除
                          </Tag>
                          &nbsp;&nbsp;&nbsp;
                          {/* </Popconfirm> */}
                          <Popconfirm
                            title="确认修改?"
                            onConfirm={() => showModal(index, record)}
                          >
                            <Tag color="green">
                              <a href="/" style={{ color: "green" }}>
                                修改
                              </a>
                            </Tag>
                          </Popconfirm>
                          <br />
                        </div>
                      );
                    })}
                  </Col>
                </Row>
              </div>
            )}
            dataSource={userPersonalPlanListArr}
          />
        </div>
        <Modal
          title="请修改属性"
          visible={modelVisible}
          onOk={() => handleOK(this, recordItem, rowIndex)}
          onCancel={hideModal}
          okText="确认"
          cancelText="取消"
        >
          <CustomizeForm ref="abc" />
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userPersonalPlanList: state.getIn(["personal", "userPersonalPlanList"]),
  modelVisible: state.getIn(["personal", "modelVisible"]),
  hideModal: state.getIn(["personal", "hideModal"]),
  rowIndex: state.getIn(["personal", "rowIndex"]),
  recordItem: state.getIn(["personal", "recordItem"])
});
const mapDispatchToProps = dispatch => ({
  deleteItem(record, tag) {
    var user_id = JSON.parse(sessionStorage.getItem("user")).user_id;
    var selectitemIndex = record.group_id.indexOf(tag);
    var selectPlanId = record.group_plan_group[selectitemIndex];
    dispatch(actionCreator.deletePersonalPlan(selectPlanId, tag, user_id));
  },
  showModal(index, record) {
    dispatch(actionCreator.showModal(index, record));
  },
  hideModal() {
    dispatch(actionCreator.hideModal());
  },
  handleOK(_self, recordItem, rowIndex) {
    var record = recordItem.toJS();
    //原来的数据
    var selectPlanId = record.group_plan_group[rowIndex];
    var selectExerciseId = record.group_id[rowIndex];
    var selectExerciseGroup = record.group_group[rowIndex];
    var selectExerciseTimes = record.group_times[rowIndex];
    var plan_day_pre;
    switch (record.plan_day) {
      case "星期一":
        plan_day_pre = 1;
        break;
      case "星期二":
        plan_day_pre = 2;
        break;
      case "星期三":
        plan_day_pre = 3;
        break;
      case "星期四":
        plan_day_pre = 4;
        break;
      case "星期五":
        plan_day_pre = 5;
        break;
      case "星期六":
        plan_day_pre = 6;
        break;
      case "星期日":
        plan_day_pre = 7;
        break;
      default:
        plan_day_pre = 1;
    }
    var values = {};
    values.exercise_id_pre = selectExerciseId;
    values.plan_id_pre = selectPlanId;
    values.plan_day_pre = plan_day_pre;
    values.exercise_groups_pre = selectExerciseGroup;
    values.exercise_times_pre = selectExerciseTimes;
    //强行操作dom
    var plan_day = document.getElementsByClassName(
      "ant-select-selection-selected-value"
    )[0].innerHTML;
    var exercise_groups = document.getElementsByClassName(
      "ant-select-selection-selected-value"
    )[1].innerHTML;
    var exercise_times = document.getElementById("exercise_times").value;
    var user_id = JSON.parse(sessionStorage.getItem("user")).user_id;
    switch (plan_day) {
      case "星期一":
        plan_day = 1;
        break;
      case "星期二":
        plan_day = 2;
        break;
      case "星期三":
        plan_day = 3;
        break;
      case "星期四":
        plan_day = 4;
        break;
      case "星期五":
        plan_day = 5;
        break;
      case "星期六":
        plan_day = 6;
        break;
      case "星期日":
        plan_day = 7;
        break;
      default:
        plan_day = 1;
    }
    //后来的数据
    values.exercise_id = selectExerciseId;
    values.plan_id = selectPlanId;
    values.plan_day = plan_day;
    values.exercise_groups = exercise_groups;
    values.exercise_times = exercise_times;
    dispatch(actionCreator.updatePersonalPlan(_self, values, user_id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalCustomize));
