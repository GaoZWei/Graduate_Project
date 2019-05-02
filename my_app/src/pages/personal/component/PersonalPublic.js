import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter,Link } from "react-router-dom";
import { actionCreator } from "../store";
import { Table, Popconfirm } from "antd";
class PersonalPublic extends Component {
  render() {
    const { userCommomPlanList, deleteItem } = this.props;
    var userCommomPlanListArr = userCommomPlanList.toJS();
    // const check = (record, _self) => {
    //   // Modal.info({
    //   //   title: `${_self.plan_name}`,
    //   //   content: (
    //   //     <div
    //   //       dangerouslySetInnerHTML={{
    //   //         __html: `${_self.plan_description}`
    //   //       }}
    //   //     />
    //   //   )
    //   // });
    //   _self.props.history.push("/plan/" + record.plan_id);
    // };
    const columns = [
      { title: "计划序号", dataIndex: "plan_id", key: "plan_number" },
      { title: "计划名称", dataIndex: "plan_name", key: "plan_name" },
      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: (text, record) => {
          return (
            <span>
              <Link to={'/plan/'+record.plan_id}>
              {/* onClick={() => check(record, this)} */}
                查看
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Popconfirm
                title="确认删除?"
                onConfirm={() => deleteItem(record, this)}
              >
                <a href="/">删除</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Popconfirm>
              <a href="/plan">添加</a>
            </span>
          );
        }
      }
    ];
    return (
      <div className="personal_public_plan">
        <div className="personal_public_plan_title">我的公共计划</div>
        <div>
          <Table
            columns={columns}
            expandedRowRender={record => (
              <p style={{ margin: 0 }}>{record.plan_description}</p>
            )}
            dataSource={userCommomPlanListArr}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userCommomPlanList: state.getIn(["personal", "userCommomPlanList"])
});
const mapDispatchToProps = dispatch => ({
  deleteItem(record) {
    var plan_id = record.plan_id;
    var user_id = JSON.parse(sessionStorage.getItem("user")).user_id;
    dispatch(actionCreator.deleteCommonPlan(plan_id, user_id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalPublic));
