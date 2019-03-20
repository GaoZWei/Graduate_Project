import React, { Component } from "react";
import { Table ,Popconfirm} from "antd";
class PersonalCustomize extends Component {
  render() {
    const columns = [
      // { title: "计划序号", dataIndex: "plan_number", key: "plan_number" },
      { title: "计划日期", dataIndex: "plan_date", key: "plan_date" },
      { title: "计划名称", dataIndex: "plan_name", key: "plan_name" },
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
              <a href="/">添加</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/">设置组数</a>
            </span>
          );
        }
      }
    ];

    const data = [
      {
        key: 1,
        plan_number: 1,
        plan_date: "星期一",
        plan_name: "健身计划1",

        description: "这是健身计划1的介绍"
      },
      {
        key: 2,
        plan_number: 2,
        plan_date: "星期二",
        plan_name: "健身计划2",

        description: "这是健身计划2的介绍"
      },
      {
        key: 3,
        plan_number: 3,
        plan_date: "星期三",
        plan_name: "健身计划3",

        description: "这是健身计划3的介绍"
      }
    ];
    return (
      <div className="personal_public_plan">
        <div className="personal_public_plan_title">我的定制计划</div>
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
export default PersonalCustomize;
