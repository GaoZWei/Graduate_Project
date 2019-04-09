import React, { Component } from "react";
import { Table, Popconfirm } from "antd";
class PersonalFoodList extends Component {
  render() {
    const columns = [
      // { title: "食物序号", dataIndex: "food_number", key: "food_number" },
      { title: "食物名称", dataIndex: "food_name", key: "food_name" },
      { title: "食物热量", dataIndex: "food_hot", key: "food_hot" },
      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: () => {
          return (
            <span>
              <a href="/">查看</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Popconfirm
                title="确认删除?"
                // onConfirm={deleteCollect.bind(null, record)}
              >
                <a href="/">删除</a>{" "}
              </Popconfirm>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/">添加</a>
            </span>
          );
        }
      }
    ];

    const data = [
      {
        key: 1,
        food_number: 1,
        food_name: "食物一",
        food_hot: "热量1",
        description: "这是食物1的介绍"
      },
      {
        key: 2,
        food_number: 2,
        food_name: "食物二",
        food_hot: "热量2",
        description: "这是食物2的介绍"
      },
      {
        key: 3,
        food_number: 3,
        food_name: "食物三",
        food_hot: "热量3",

        description: "这是食物3的介绍"
      }
    ];
    return (
      <div className="personal_public_plan">
        <div className="personal_public_plan_title">我的食物清单</div>
        <div>
          <Table
            columns={columns}
            expandedRowRender={record => (
              <p style={{ margin: 0 }}>{record.description}</p>
            )}
            dataSource={data}
          />
        </div>
      </div>
    );
  }
}
export default PersonalFoodList;
