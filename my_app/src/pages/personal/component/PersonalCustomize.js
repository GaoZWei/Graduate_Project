import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "../store";
import { Table, Popconfirm, Row, Col } from "antd";
class PersonalCustomize extends Component {
  render() {
    const { userPersonalPlanList, deleteItem } = this.props;
    var userPersonalPlanListArr = userPersonalPlanList.toJS();
    const columns = [
      { title: "计划日期", dataIndex: "plan_day", key: "plan_date" },
      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: () => {
          return (
            <span>
              <a href="/exercise">添加</a>
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
                  <Col span={6}>
                    {record.group_name.map(tag => {
                      var random2 = new Date() + Math.random();
                      return (
                        <div key={random2}>
                          {tag}
                          (组数):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                  <Col span={5}>
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
                  <Col span={5}>
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
                        <Popconfirm
                          title="确认删除?"
                          onConfirm={() => deleteItem(record, tag)}
                          key={random5}
                        >
                          <a href="/">删除</a>
                          <br />
                        </Popconfirm>
                      );
                    })}
                  </Col>
                </Row>
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
  userPersonalPlanList: state.getIn(["personal", "userPersonalPlanList"])
});
const mapDispatchToProps = dispatch => ({
  deleteItem(record, tag) {
    var user_id = JSON.parse(sessionStorage.getItem("user")).user_id;
    dispatch(actionCreator.deletePersonalPlan(record.plan_id, tag, user_id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalCustomize));
