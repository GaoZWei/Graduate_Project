import React, { Component } from "react";
import { connect } from "react-redux";
// import { actionCreator } from "../store";
import { Table, Popconfirm } from "antd";
class PersonalCustomize extends Component {
  render() {
    const { userPersonalPlanList } = this.props;
    var userPersonalPlanListArr = userPersonalPlanList.toJS();
    console.log(userPersonalPlanListArr);
    const columns = [
      // { title: "计划序号", dataIndex: "plan_number", key: "plan_number" },
      { title: "计划日期", dataIndex: "plan_day", key: "plan_date" },
      { title: "计划名称", dataIndex: "plan_name", key: "plan_name" },
      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: () => {
          return (
            <span>
              <a href="/">查看</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {/* <Popconfirm
                title="确认删除?"
              >
                <a href="/">删除</a>{" "}
              </Popconfirm> */}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/exercise">添加</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/">设置组数</a>
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
              <p style={{ margin: 0 }}>
                {record.exercise_name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 组数:
                {record.exercise_groups}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每组个数:
                {record.exercise_times}
                <Popconfirm
                  title="确认删除?"
                  // onConfirm={deleteCollect.bind(null, record)}
                >
                  <a href="/">删除</a>
                </Popconfirm>
              </p>
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
export default connect(
  mapStateToProps,
  null
)(PersonalCustomize);
