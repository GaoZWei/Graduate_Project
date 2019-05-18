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
      recentExercise_id
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
                    {record.group_id.map(tag => {
                      var random5 = new Date() + Math.random();
                      return (
                        <div key={random5}>
                          <Popconfirm
                            title="确认删除?"
                            onConfirm={() => deleteItem(record, tag)}
                          >
                            <Tag color="volcano">删除</Tag>
                            &nbsp;&nbsp;&nbsp;
                          </Popconfirm>
                          <Popconfirm
                            title="确认修改?"
                            onConfirm={() => showModal(tag)}
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
                <Modal
                  title="请修改属性"
                  visible={modelVisible}
                  onOk={() => handleOK(this, record, recentExercise_id)}
                  onCancel={hideModal}
                  okText="确认"
                  cancelText="取消"
                >
                  <CustomizeForm ref="abc" />
                </Modal>
              </div>
            )}
            dataSource={userPersonalPlanListArr}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userPersonalPlanList: state.getIn(["personal", "userPersonalPlanList"]),
  modelVisible: state.getIn(["personal", "modelVisible"]),
  hideModal: state.getIn(["personal", "hideModal"]),
  recentExercise_id: state.getIn(["personal", "recentExercise_id"])
});
const mapDispatchToProps = dispatch => ({
  deleteItem(record, tag) {
    var user_id = JSON.parse(sessionStorage.getItem("user")).user_id;
    dispatch(actionCreator.deletePersonalPlan(record.plan_id, tag, user_id));
  },
  showModal(tag) {
    dispatch(actionCreator.showModal(tag));
  },
  hideModal() {
    dispatch(actionCreator.hideModal());
  },
  handleOK(_self, record, recentExercise_id) {
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
    var values = {};
    values.exercise_id = recentExercise_id;
    values.plan_id = record.plan_id;
    values.plan_day = plan_day;
    values.exercise_groups = exercise_groups;
    values.exercise_times = exercise_times;
    dispatch(actionCreator.updatePersonalPlan(values, user_id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalCustomize));
