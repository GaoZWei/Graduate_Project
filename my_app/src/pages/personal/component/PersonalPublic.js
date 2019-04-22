import React, { Component } from "react";
import { Table, Popconfirm } from "antd";
class PersonalPublic extends Component {
  render() {
    const check = _self => {
      console.log(_self);
      // Modal.info({
      //   title: `${record.title}`,
      //   content: (
      //     <div
      //       dangerouslySetInnerHTML={{
      //         __html: `${record.knowledgecontent}`
      //       }}
      //     />
      //   )
      // });
    };
    const columns = [
      { title: "计划序号", dataIndex: "plan_number", key: "plan_number" },
      { title: "计划名称", dataIndex: "plan_name", key: "plan_name" },
      //   { title: "Address", dataIndex: "address", key: "address" },
      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: () => {
          return (
            <span>
              <a href="javascript:;" onClick={() => check(this)}>
                查看
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Popconfirm
                title="确认删除?"
                // onConfirm={deleteCollect.bind(null, record)}
              >
                <a href="/">删除</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Popconfirm>
              <a href="/plan">添加</a>
            </span>
          );
        }
      }
    ];

    const data = [
      {
        key: 1,
        plan_number: 1,
        plan_name: "健身计划1",
        address: "健身计划1",
        description: "这是健身计划1的介绍"
      },
      {
        key: 2,
        plan_number: 2,
        plan_name: "健身计划2",
        address: "London No. 1 Lake Park",
        description: "这是健身计划2的介绍"
      },
      {
        key: 3,
        plan_number: 3,
        plan_name: "健身计划3",
        address: "Sidney No. 1 Lake Park",
        description: "这是健身计划3的介绍"
      }
    ];
    return (
      <div className="personal_public_plan">
        <div className="personal_public_plan_title">我的公共计划</div>

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
export default PersonalPublic;
