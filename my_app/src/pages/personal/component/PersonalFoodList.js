import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import { withRouter, Link } from "react-router-dom";
import { Table, Popconfirm } from "antd";
class PersonalFoodList extends Component {
  render() {
    const { userFoodList, deleteItem } = this.props;
    var userFoodListArr = userFoodList.toJS();
    const columns = [
      { title: "食物名称", dataIndex: "food_name", key: "food_name" },
      { title: "食物热量", dataIndex: "food_hots", key: "food_hots" },
      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: (text, record) => {
          return (
            <span>
              <Link to={"/food/detail/" + record.food_id}>
                {/* onClick={() => check(record, this)} */}
                查看
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Popconfirm
                title="确认删除?"
                onConfirm={() => deleteItem(record, this)}
              >
                <a href="/">删除</a>{" "}
              </Popconfirm>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/food">添加</a>
            </span>
          );
        }
      }
    ];
    return (
      <div className="personal_public_plan">
        <div className="personal_public_plan_title">我的食物清单</div>
        <div>
          <Table
            columns={columns}
            expandedRowRender={record => (
              <p style={{ margin: 0 }}>{record.food_description}</p>
            )}
            dataSource={userFoodListArr}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userFoodList: state.getIn(["personal", "userFoodList"])
});
const mapDispatchToProps = dispatch => ({
  deleteItem(record) {
    var food_id = record.food_id;
    var user_id = JSON.parse(sessionStorage.getItem("user")).user_id;
    dispatch(actionCreator.deleteFoodList(food_id, user_id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonalFoodList));
